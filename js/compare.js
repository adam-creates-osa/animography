// ===== Sizes (📏) and Compare two animals (⚖️) =====
// Size data: data/sizes.js (lengths in cm, weights in grams)

function sizeOf(a) { return (window.SIZES || {})[a.id] || null; }

// 0.5 → "5 mm", 12 → "12 cm", 180 → "1.8 m"
function fmtLen(cm) {
  const r = (n, d = 1) => String(Math.round(n * 10 ** d) / 10 ** d).replace(".", currentLang === "es" ? "," : ".");
  if (cm < 1) return r(cm * 10, 0) + " mm";
  if (cm < 100) return r(cm, cm < 10 ? 1 : 0) + " cm";
  return r(cm / 100, cm < 1000 ? 1 : 0) + " m";
}
function fmtWt(g) {
  const r = (n, d = 1) => {
    const v = Math.round(n * 10 ** d) / 10 ** d;
    return v.toLocaleString(currentLang === "es" ? "es-CR" : "en-US", { maximumFractionDigits: d });
  };
  if (g < 1000) return r(g, g < 10 ? 1 : 0) + " g";
  if (g < 1000000) return r(g / 1000, g < 10000 ? 1 : 0) + " kg";
  return r(g / 1000000, 0) + " t";
}
// Imperial, for English readers
function fmtLenUS(cm) {
  const inch = cm / 2.54;
  if (inch < 1) return (Math.round(inch * 100) / 100) + " in";
  if (inch < 36) return Math.round(inch * 10) / 10 + " in";
  return Math.round(inch / 12 * 10) / 10 + " ft";
}
function fmtWtUS(g) {
  const lb = g / 453.6;
  if (lb < 1) return Math.round(g / 28.35 * 10) / 10 + " oz";
  if (lb < 4000) return Math.round(lb).toLocaleString("en-US") + " lb";
  return Math.round(lb / 2000).toLocaleString("en-US") + " tons";
}
// "1.1 m–1.9 m" → "1.1–1.9 m" (same unit written once)
function range(fmt, [a, b]) {
  const x = fmt(a), y = fmt(b);
  if (a === b || x === y) return x;
  const [nx, ux] = [x.replace(/ [^ ]+$/, ""), x.split(" ").pop()];
  const [ny, uy] = [y.replace(/ [^ ]+$/, ""), y.split(" ").pop()];
  return ux === uy ? `${nx}–${ny} ${ux}` : `${x}–${y}`;
}

function sizeLines(a) {
  const s = sizeOf(a);
  if (!s) return null;
  const en = currentLang === "en";
  const len = range(fmtLen, s.len) + (en ? ` (${range(fmtLenUS, s.len)})` : "");
  const wt = s.wt ? range(fmtWt, s.wt) + (en ? ` (${range(fmtWtUS, s.wt)})` : "") : null;
  return { label: t("sizeTypes")[s.type] || t("sizeTypes").total, len, wt, approx: s.approx };
}

// "📏 Size" box on the animal page
function sizeSection(a) {
  const s = sizeLines(a);
  if (!s) return "";
  return el("section", { class: "info-card size-card" },
    el("h3", {}, "📏 " + t("sizeTitle")),
    el("p", {}, el("strong", {}, s.label + ": "), s.len),
    s.wt ? el("p", {}, el("strong", {}, t("weight") + ": "), s.wt) : "",
    s.approx ? el("p", { class: "size-approx" }, "≈ " + t("sizeApprox")) : "",
    el("a", { href: `#/compare/${a.id}`, class: "big-btn small compare-link" }, "⚖️ " + t("compareWith")));
}

// ---------- Compare page: #/compare/idA/idB ----------
const COMPARE_EXAMPLES = [["whale-shark", "blue-whale"], ["jaguar", "puma"], ["glass-frog", "golden-toad"],
  ["harpy-eagle", "snowcap"], ["leatherback-turtle", "american-crocodile"], ["hercules-beetle", "blue-morpho"]];

function animalPicker(current, onPick, label) {
  const wrap = el("div", { class: "picker" });
  const input = el("input", { type: "search", class: "picker-input", placeholder: t("comparePick"), "aria-label": label,
    value: current ? current.name[currentLang] : "" });
  const list = el("div", { class: "picker-list", role: "listbox" });
  const show = () => {
    const q = plain(input.value.trim());
    list.replaceChildren();
    if (!q || (current && input.value === current.name[currentLang])) return;
    window.ANIMALS.filter(a => plain(a.name[currentLang]).includes(q) || plain(a.name.en).includes(q) ||
      plain(a.name.es).includes(q) || plain(a.scientific).includes(q)).slice(0, 8).forEach(a => {
      const b = el("button", { type: "button", class: "picker-option", role: "option" }, a.emoji + " " + a.name[currentLang]);
      b.addEventListener("click", () => onPick(a));
      list.append(b);
    });
    if (!list.children.length) list.append(el("p", { class: "note" }, t("noResults")));
  };
  input.addEventListener("input", show);
  input.addEventListener("focus", () => input.select());
  wrap.append(el("span", { class: "picker-label" }, label), input, list);
  return wrap;
}

function compareColumn(a) {
  if (!a) return el("div", { class: "cmp-col empty" }, el("p", {}, "❓"), el("p", { class: "note" }, t("comparePick")));
  const s = sizeLines(a);
  const regions = regionsOf(a).map(id => regionById(id)?.name[currentLang]).filter(Boolean).join(", ");
  return el("div", { class: "cmp-col" },
    photoOrEmoji(a, { width: 500, allowPhoto: Boolean(a.photo), cls: "cmp-art" }),
    el("a", { href: `#/animal/${a.id}`, class: "cmp-name" }, a.name[currentLang]),
    el("p", { class: "scientific" }, a.scientific, " · ", t("groups")[a.group]),
    el("div", { class: "cmp-badges" }, statusBadge(a.status),
      el("span", { class: `chip-rarity rarity-${rarityOf(a)}` }, t("rarityIcon")[rarityOf(a)] + " " + t("rarity")[rarityOf(a)])),
    el("dl", { class: "cmp-facts" },
      el("dt", {}, "📏 " + (s ? s.label : t("sizeTitle"))), el("dd", {}, s ? s.len + (s.approx ? " ≈" : "") : "—"),
      el("dt", {}, "⚖️ " + t("weight")), el("dd", {}, s && s.wt ? s.wt : t("weightUnknown")),
      el("dt", {}, "🗺️ " + t("where")), el("dd", {}, regions || "—"),
      el("dt", {}, "✨ " + t("funFact")), el("dd", {}, a.funFact[currentLang])));
}

// Bars that show how much bigger one animal is than the other
function compareBars(a, b) {
  const sa = sizeOf(a), sb = sizeOf(b);
  if (!sa || !sb) return "";
  const mid = r => (r[0] + r[1]) / 2;
  const rows = [];
  const bar = (animal, value, max, text) => el("div", { class: "cmp-bar-row" },
    el("span", { class: "cmp-bar-name" }, animal.emoji + " " + animal.name[currentLang]),
    el("div", { class: "cmp-bar-track" }, el("div", { class: "cmp-bar", style: `width:${Math.max(1.5, value / max * 100)}%` })),
    el("span", { class: "cmp-bar-val" }, text));
  const times = (x, y) => {
    const r = x / y;
    return r >= 10 ? Math.round(r).toLocaleString(currentLang === "es" ? "es-CR" : "en-US") : String(Math.round(r * 10) / 10).replace(".", currentLang === "es" ? "," : ".");
  };
  // Length
  const la = mid(sa.len), lb = mid(sb.len), lmax = Math.max(la, lb);
  rows.push(el("h3", { class: "collection-title center" }, "📏 " + t("compareLength")),
    bar(a, la, lmax, fmtLen(la)), bar(b, lb, lmax, fmtLen(lb)));
  const [big, small, bigV, smallV] = la >= lb ? [a, b, la, lb] : [b, a, lb, la];
  if (bigV / smallV >= 1.15) rows.push(el("p", { class: "cmp-fact" }, fill(t("compareLonger"), { big: big.name[currentLang], n: times(bigV, smallV), small: small.name[currentLang] })));
  else rows.push(el("p", { class: "cmp-fact" }, t("compareSameLength")));
  if (sa.type !== sb.type) rows.push(el("p", { class: "note" }, "⚠️ " + fill(t("compareDiffMeasure"), { a: t("sizeTypes")[sa.type].toLowerCase(), b: t("sizeTypes")[sb.type].toLowerCase() })));
  // Weight
  if (sa.wt && sb.wt) {
    const wa = mid(sa.wt), wb = mid(sb.wt), wmax = Math.max(wa, wb);
    rows.push(el("h3", { class: "collection-title center" }, "⚖️ " + t("weight")),
      bar(a, wa, wmax, fmtWt(wa)), bar(b, wb, wmax, fmtWt(wb)));
    const [hb, hs, hv, sv] = wa >= wb ? [a, b, wa, wb] : [b, a, wb, wa];
    if (hv / sv >= 1.15) rows.push(el("p", { class: "cmp-fact" }, fill(t("compareHeavier"), { big: hb.name[currentLang], n: times(hv, sv), small: hs.name[currentLang] })));
  }
  rows.push(el("p", { class: "note" }, t("compareAverages")));
  return el("div", { class: "cmp-bars" }, ...rows);
}

function renderCompare(idA, idB) {
  const box = document.getElementById("compare");
  const find = id => window.ANIMALS.find(x => x.id === id) || null;
  const a = find(idA), b = find(idB);
  const go = (x, y) => { location.hash = `#/compare/${x ? x.id : "-"}/${y ? y.id : "-"}`; };
  const swap = el("button", { type: "button", class: "chip" }, "⇄ " + t("compareSwap"));
  swap.addEventListener("click", () => go(b, a));
  const examples = el("div", { class: "chips" }, ...COMPARE_EXAMPLES.map(([x, y]) => {
    const ax = find(x), ay = find(y);
    if (!ax || !ay) return "";
    return el("a", { href: `#/compare/${x}/${y}`, class: "chip" }, `${ax.emoji} ${ax.name[currentLang]} vs ${ay.emoji} ${ay.name[currentLang]}`);
  }));
  box.replaceChildren(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "⚖️ " + t("compareTitle")),
    el("p", { class: "note" }, t("compareIntro")),
    el("div", { class: "cmp-pickers" },
      animalPicker(a, x => go(x, b), t("compareFirst")),
      a && b ? swap : el("span", { class: "vs" }, "vs"),
      animalPicker(b, y => go(a, y), t("compareSecond"))),
    a && b ? compareBars(a, b) : el("div", {}, el("p", { class: "note center" }, t("compareTry")), examples),
    el("div", { class: "cmp-cols" }, compareColumn(a), compareColumn(b)),
    a && b ? el("div", {}, el("p", { class: "note center" }, t("compareTry")), examples) : ""
  );
}
