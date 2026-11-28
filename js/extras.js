// ===== Read aloud (🔊) and My Sightings (👀) =====

// ---------- Read aloud: uses the voice built into the phone or computer (free, works offline) ----------
const ReadAloud = (() => {
  const supported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  let queue = [], speaking = false, button = null, current = null;

  // Pick a voice for the language (Latin American Spanish first, then any Spanish; US English first)
  function voiceFor(lang) {
    const voices = speechSynthesis.getVoices();
    const prefs = lang === "es" ? ["es-CR", "es-MX", "es-US", "es-419", "es-"] : ["en-US", "en-GB", "en-"];
    for (const p of prefs) {
      const v = voices.find(v => v.lang && v.lang.replace("_", "-").startsWith(p));
      if (v) return v;
    }
    return null;
  }

  // Long text is split into sentences (some browsers stop reading very long sentences)
  function pieces(text) {
    return (text.match(/[^.!?¡¿]+[.!?]*|[¡¿][^.!?]+[.!?]*/g) || [text]).map(s => s.trim()).filter(Boolean);
  }

  function setButton(on) {
    if (!button) return;
    button.textContent = on ? "⏹ " + t("readStop") : "🔊 " + t("readAloud");
    button.setAttribute("aria-pressed", String(on));
  }

  function stop() {
    if (!supported) return;
    queue = []; speaking = false;
    speechSynthesis.cancel();
    current?.classList.remove("reading"); current = null;
    setButton(false);
  }

  function next() {
    if (!speaking) return;
    const item = queue.shift();
    if (!item) { stop(); return; }
    if (item.node !== current) { current?.classList.remove("reading"); current = item.node; current?.classList.add("reading");
      current?.scrollIntoView({ behavior: "smooth", block: "center" }); }
    const u = new SpeechSynthesisUtterance(item.text);
    u.lang = currentLang === "es" ? "es-CR" : "en-US";
    const v = voiceFor(currentLang); if (v) u.voice = v;
    u.rate = 0.95;
    u.onend = next;
    u.onerror = () => stop();
    speechSynthesis.speak(u);
  }

  // Read a list of page parts (each part is highlighted while it's read)
  function read(nodes) {
    stop();
    queue = [];
    for (const node of nodes) {
      if (!node) continue;
      const text = (node.innerText || node.textContent || "").replace(/\s+/g, " ").trim();
      for (const p of pieces(text)) queue.push({ node, text: p });
    }
    if (!queue.length) return;
    speaking = true; setButton(true);
    next();
  }

  // The 🔊 button. getNodes() returns the page parts to read, in order.
  function makeButton(getNodes) {
    if (!supported) return "";
    stop();
    button = el("button", { type: "button", class: "action-btn read-btn", "aria-pressed": "false" }, "🔊 " + t("readAloud"));
    button.addEventListener("click", () => speaking ? stop() : read(getNodes()));
    return button;
  }

  if (supported) speechSynthesis.getVoices(); // starts loading the voices
  return { makeButton, stop, supported };
})();

// ---------- My Sightings: animals you've seen in real life (only the date is saved, never a location) ----------
const Sightings = {
  all() { return Store.load().sightings || {}; },
  get(id) { return this.all()[id] || null; },
  set(id, date) { const d = Store.load(); d.sightings = { ...(d.sightings || {}), [id]: date }; Store.save(d); updateCounters(); },
  remove(id) { const d = Store.load(); const s = { ...(d.sightings || {}) }; delete s[id]; d.sightings = s; Store.save(d); updateCounters(); }
};

function today() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
}
function niceDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(currentLang === "es" ? "es-CR" : "en-US", { day: "numeric", month: "long", year: "numeric" });
}

// The "👀 I saw it!" button on an animal page, with a small form to pick the date
function sightingBox(a) {
  const wrap = el("div", { class: "sighting-box" });
  const draw = (editing) => {
    const seen = Sightings.get(a.id);
    if (!editing) {
      const btn = el("button", { type: "button", class: "action-btn" + (seen ? " seen" : "") },
        seen ? "✅ " + fill(t("seenOn"), { date: niceDate(seen) }) : "👀 " + t("iSawIt"));
      btn.addEventListener("click", () => draw(true));
      wrap.replaceChildren(btn);
      return;
    }
    const input = el("input", { type: "date", class: "sighting-date", value: seen || today(), max: today(), "aria-label": t("seenWhen") });
    const save = el("button", { type: "button", class: "big-btn small" }, t("binderSave"));
    save.addEventListener("click", () => { if (input.value) Sightings.set(a.id, input.value); draw(false); });
    const cancel = el("button", { type: "button", class: "chip" }, t("binderDeleteNo"));
    cancel.addEventListener("click", () => draw(false));
    const parts = [el("label", { class: "sighting-label" }, t("seenWhen"), " ", input), save, cancel];
    if (seen) {
      const rm = el("button", { type: "button", class: "chip chip-danger" }, t("seenRemove"));
      rm.addEventListener("click", () => { Sightings.remove(a.id); draw(false); });
      parts.push(rm);
    }
    wrap.replaceChildren(el("div", { class: "sighting-form" }, ...parts,
      el("p", { class: "sighting-tip" }, t("seenSafety"))));
  };
  draw(false);
  return wrap;
}

let sightGroup = "all";
function renderSightings() {
  const box = document.getElementById("sightings");
  const seen = Sightings.all();
  const ids = Object.keys(seen).filter(id => window.ANIMALS.some(a => a.id === id));
  const list = ids.map(id => window.ANIMALS.find(a => a.id === id))
    .filter(a => sightGroup === "all" || a.group === sightGroup)
    .sort((x, y) => seen[y.id].localeCompare(seen[x.id]));
  const grid = el("div", { class: "results sight-list" }, ...list.map(a =>
    el("div", { class: "sight-item" }, animalButton(a), el("span", { class: "sight-date" }, "👀 " + niceDate(seen[a.id])))));
  box.replaceChildren(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "👀 " + t("sightingsTitle")),
    el("p", { class: "note" }, t("sightingsIntro")),
    el("p", { class: "badge-count" }, fill(t("sightingsCount"), { n: ids.length, total: window.ANIMALS.length })),
    groupChips(sightGroup, g => { sightGroup = g; renderSightings(); }, a => Boolean(seen[a.id])),
    ids.length ? (list.length ? grid : el("p", { class: "note" }, t("noResults")))
      : el("p", { class: "empty-binders" }, t("sightingsEmpty")),
    el("section", { class: "info-card science-box" },
      el("h3", {}, "🔬 " + t("scienceTitle")),
      el("p", {}, t("scienceText")),
      el("div", { class: "links" },
        el("a", { href: "https://www.inaturalist.org/pages/seek_app", target: "_blank", rel: "noopener" }, "📱 Seek (" + t("scienceKids") + ")"),
        el("a", { href: "https://www.inaturalist.org/", target: "_blank", rel: "noopener" }, "🌎 iNaturalist (13+)")),
      el("p", { class: "sighting-tip" }, t("scienceSafety")))
  );
}
