// ===== The sloth mascot: guide, learning rewards, trivia milestones, secret codes =====
// Settings and words: data/mascot.js · Developer secret codes: data/secret-codes.js
// Uses: Store, ANIMALS, renderCard(), rarityOf(), updateCounters(), currentLang, fill(), el()

// Lento the sloth: an original drawing for Animography (colors can be changed here)
const SLOTH_SVG = `<svg aria-hidden="true" focusable="false" viewBox="0 0 140 150" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20 Q70 8 138 18" stroke="#6b4a2b" stroke-width="9" fill="none" stroke-linecap="round"/>
<ellipse cx="118" cy="10" rx="10" ry="5" fill="#2f9e44" transform="rotate(-25 118 10)"/>
<ellipse cx="22" cy="12" rx="8" ry="4" fill="#40c057" transform="rotate(20 22 12)"/>
<path d="M44 88 Q30 50 46 20" stroke="#8d6748" stroke-width="13" fill="none" stroke-linecap="round"/>
<path d="M96 88 Q110 50 94 20" stroke="#8d6748" stroke-width="13" fill="none" stroke-linecap="round"/>
<g stroke="#3b2a1a" stroke-width="3" stroke-linecap="round" fill="none">
<path d="M40 21 q2 -7 7 -6"/><path d="M45 21 q2 -7 7 -6"/><path d="M50 21 q2 -6 6 -5"/>
<path d="M88 21 q2 -6 6 -5"/><path d="M93 21 q2 -7 7 -6"/><path d="M98 21 q2 -7 7 -6"/>
</g>
<ellipse cx="70" cy="110" rx="34" ry="34" fill="#8d6748"/>
<ellipse cx="70" cy="116" rx="21" ry="24" fill="#c4a27c"/>
<ellipse cx="50" cy="140" rx="10" ry="8" fill="#8d6748"/>
<ellipse cx="90" cy="140" rx="10" ry="8" fill="#8d6748"/>
<circle cx="70" cy="70" r="30" fill="#8d6748"/>
<ellipse cx="70" cy="74" rx="25" ry="21" fill="#f1e0c5"/>
<ellipse cx="58" cy="70" rx="10" ry="6.5" fill="#4a3221" transform="rotate(-18 58 70)"/>
<ellipse cx="82" cy="70" rx="10" ry="6.5" fill="#4a3221" transform="rotate(18 82 70)"/>
<circle cx="59" cy="69" r="4.6" fill="#fff"/><circle cx="81" cy="69" r="4.6" fill="#fff"/>
<circle cx="60" cy="69.5" r="2.6" fill="#1b1b1b"/><circle cx="80" cy="69.5" r="2.6" fill="#1b1b1b"/>
<circle cx="61" cy="68.3" r="0.9" fill="#fff"/><circle cx="81" cy="68.3" r="0.9" fill="#fff"/>
<ellipse cx="70" cy="79" rx="4.5" ry="3.2" fill="#3b2a1a"/>
<path d="M61 85 Q70 93 79 85" stroke="#3b2a1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<ellipse cx="54" cy="81" rx="4" ry="2.5" fill="#f7a1a1" opacity="0.8"/>
<ellipse cx="86" cy="81" rx="4" ry="2.5" fill="#f7a1a1" opacity="0.8"/>
<ellipse cx="70" cy="45" rx="30" ry="6" fill="#c9a86a"/>
<path d="M52 45 Q54 28 70 27 Q86 28 88 45 Z" fill="#d9bb7c"/>
<rect x="53" y="39" width="34" height="5" fill="#2b8a3e"/>
<path d="M70 27 L70 35" stroke="#b08d4f" stroke-width="2"/>
</svg>`;

const Mascot = (() => {
  const CFG = window.MASCOT;
  const CODE_SALT = "animography:";
  let screen = "home";        // which screen the user is on (for tips)
  let readTimer = null;       // counts time on an animal page
  let tipIndex = {};          // rotates through tips

  const T = () => CFG.text[currentLang] || CFG.text.en;
  const say = (key, vals = {}) => fill(T()[key], { name: CFG.name, ...vals });

  // ---------- saved mascot data (inside the main save) ----------
  function state() {
    const d = Store.load();
    d.mascot = { introDone: false, read: [], perfectTotal: 0, perfectStreak: 0, milestones: [], codes: [], redeemed: [], ...(d.mascot || {}) };
    return d;
  }

  // ---------- giving rewards ----------
  function addPoints(d, n) { d.points += n; d.totalEarned = (d.totalEarned || 0) + n; }

  function pickRandomCard(rarity, d) {
    const pool = ANIMALS.filter(a => rarityOf(a) === rarity);
    const notOwned = pool.filter(a => !(d.cards[a.id] > 0));
    return (notOwned.length ? notOwned : pool)[Math.floor(Math.random() * (notOwned.length || pool.length))];
  }

  // Applies a reward to the save. Returns { points } or { animal }.
  function grant(d, reward) {
    if (reward.points) { addPoints(d, reward.points); return { points: reward.points }; }
    let animal = null;
    if (reward.card) animal = ANIMALS.find(a => a.id === reward.card);
    if (!animal && reward.randomCard) animal = pickRandomCard(reward.randomCard, d);
    if (!animal) animal = pickRandomCard("rare", d);
    d.cards[animal.id] = (d.cards[animal.id] || 0) + 1;
    return { animal };
  }

  // ---------- the bubble (panel) ----------
  // The bubble and button are built the first time they're needed (after the page has loaded)
  let panel, bubble, actions, btn;
  function build() {
    if (btn) return;
    const root = document.getElementById("mascot");
    panel = el("div", { class: "mascot-panel", role: "dialog", "aria-label": CFG.name, hidden: "" });
    bubble = el("div", { class: "mascot-bubble", "aria-live": "polite" });
    actions = el("div", { class: "mascot-actions" });
    btn = el("button", { type: "button", class: "mascot-btn", "aria-expanded": "false" });
    btn.innerHTML = SLOTH_SVG;
    root.append(btn, panel);
    btn.addEventListener("click", toggle);
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !panel.hidden) hide(); });
  }

  function header() {
    const close = el("button", { type: "button", class: "mascot-close", "aria-label": T().close }, "✕");
    close.addEventListener("click", hide);
    return el("div", { class: "mascot-head" }, el("strong", {}, "🦥 " + CFG.name), close);
  }

  function menu() {
    actions.replaceChildren();
    for (const [key, fn] of [["tipBtn", showTip], ["goBtn", showGo], ["codeBtn", showCode], ["rewardsBtn", showRewards], ["iqBtn", showIQ]]) {
      const b = el("button", { type: "button", class: "chip" }, T()[key]);
      b.addEventListener("click", fn);
      actions.append(b);
    }
  }

  function show(...content) {
    build();
    panel.replaceChildren(header(), bubble, actions);
    bubble.replaceChildren(...content);
    menu();
    panel.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    btn.classList.remove("wiggle");
  }
  function hide() { if (!panel) return; panel.hidden = true; btn.setAttribute("aria-expanded", "false"); }
  function toggle() { panel.hidden ? showTip() : hide(); }
  function wiggle() { btn.classList.remove("wiggle"); void btn.offsetWidth; btn.classList.add("wiggle"); }

  // ---------- 1) guide: tips + shortcuts ----------
  function showTip() {
    const list = T().tips[screen] || T().tips.home;
    tipIndex[screen] = ((tipIndex[screen] ?? -1) + 1) % list.length;
    show(el("p", {}, list[tipIndex[screen]]));
  }

  function showGo() {
    const links = el("div", { class: "mascot-links" });
    for (const [route, label] of Object.entries(T().places)) {
      const a = el("a", { href: route === "home" ? "#/" : `#/${route}`, class: "region-link" }, label);
      a.addEventListener("click", hide);
      links.append(a);
    }
    show(el("p", {}, T().goTitle), links);
  }

  // ---------- 2) learning rewards ----------
  function onAnimalView(id) {
    clearTimeout(readTimer);
    readTimer = setTimeout(() => countRead(id), CFG.learning.minSecondsOnPage * 1000);
  }

  function countRead(id) {
    const d = state();
    if (d.mascot.read.includes(id)) return;            // only NEW animals count
    d.mascot.read.push(id);
    const n = d.mascot.read.length, L = CFG.learning;
    if (n % L.everyNewAnimals === 0) {
      const p = L.minPoints + Math.floor(Math.random() * (L.maxPoints - L.minPoints + 1));
      addPoints(d, p);
      Store.save(d);
      updateCounters();
      const up = checkRankUp();
      show(el("p", {}, say("learnBonus", { n, p })), el("div", { class: "mascot-prize" }, `+${p} ⭐`),
           up ? el("p", { class: "iq-up" }, up) : "");
    } else {
      Store.save(d);
      const up = checkRankUp();
      if (up) { show(el("p", { class: "iq-up" }, up)); wiggle(); }
    }
  }

  // ---------- 3) trivia milestones → personal codes ----------
  function newCode() {
    const abc = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O or 1/I, to avoid mix-ups
    const part = () => Array.from({ length: 4 }, () => abc[Math.floor(Math.random() * abc.length)]).join("");
    return `SLOTH-${part()}-${part()}`;
  }

  function onRoundEnd(correct, total) {
    const d = state(), m = d.mascot;
    if (correct === total) { m.perfectTotal++; m.perfectStreak++; } else { m.perfectStreak = 0; }
    let earned = null;
    for (const ms of CFG.milestones) {
      if (m.milestones.includes(ms.id)) continue;
      const value = ms.type === "streak" ? m.perfectStreak : m.perfectTotal;
      if (value >= ms.count) {
        m.milestones.push(ms.id);
        earned = { code: newCode(), reward: ms.reward, milestone: ms.id, used: false };
        m.codes.push(earned);
        break;                                         // one code at a time
      }
    }
    Store.save(d);
    const up = checkRankUp();
    if (!earned && up) setTimeout(() => { show(el("p", { class: "iq-up" }, up)); wiggle(); }, 600);
    if (earned) {
      const ms = CFG.milestones.find(x => x.id === earned.milestone);
      setTimeout(() => {
        show(el("p", {}, say("milestone", { what: milestoneName(ms) })),
             el("div", { class: "mascot-code" }, earned.code),
             el("p", { class: "mascot-small" }, T().milestoneHow),
             up ? el("p", { class: "iq-up" }, up) : "");
        wiggle();
      }, 600);
    }
  }

  function milestoneName(ms) { return fill(T().milestoneNames[ms.type], { n: ms.count }); }

  // ---------- 4) secret codes ----------
  function showCode() {
    const input = el("input", { type: "text", class: "mascot-input", placeholder: T().codePlaceholder,
      autocomplete: "off", autocapitalize: "characters", spellcheck: "false", "aria-label": T().codeTitle });
    const go = el("button", { type: "button", class: "big-btn small mascot-go" }, T().codeSubmit);
    const result = el("div", { class: "mascot-result", "aria-live": "polite" });
    const submit = () => redeem(input.value, result);
    go.addEventListener("click", submit);
    input.addEventListener("keydown", e => { if (e.key === "Enter") submit(); });
    show(el("p", {}, T().codeTitle), el("div", { class: "mascot-form" }, input, go), result);
    input.focus();
  }

  const clean = code => code.toUpperCase().replace(/[^A-Z0-9]/g, "");

  function redeem(raw, result) {
    const code = clean(raw);
    const msg = (text, ...extra) => result.replaceChildren(el("p", {}, text), ...extra);
    if (!code) return msg(T().codeEmpty);
    const d = state(), m = d.mascot;

    // a) personal codes earned in trivia
    const mine = m.codes.find(c => clean(c.code) === code);
    let reward = null;
    if (mine) {
      if (mine.used) return msg(T().codeUsed);
      mine.used = true; reward = mine.reward;
    } else {
      // b) developer codes (stored as scrambled "hashes", see tools/code-maker.html)
      const hash = sha256(CODE_SALT + code);
      const dev = (window.SECRET_CODES || []).find(c => c.hash === hash);
      if (!dev) return msg(T().codeWrong);
      if (m.redeemed.includes(hash)) return msg(T().codeUsed);
      if (dev.expires && new Date() > new Date(dev.expires + "T23:59:59")) return msg(T().codeExpired);
      m.redeemed.push(hash); reward = dev.reward;
    }
    const got = grant(d, reward);
    Store.save(d);
    updateCounters();
    if (got.points) msg(say("gotPoints", { n: got.points }), el("div", { class: "mascot-prize" }, `+${got.points} ⭐`));
    else msg(T().gotCard, el("div", { class: "mascot-card" }, renderCard(got.animal)));
    const up = checkRankUp();
    if (up) result.append(el("p", { class: "iq-up" }, up));
    wiggle();
  }

  function showRewards() {
    const d = state(), m = d.mascot, L = CFG.learning;
    const left = L.everyNewAnimals - (m.read.length % L.everyNewAnimals);
    const next = CFG.milestones.find(ms => !m.milestones.includes(ms.id));
    const codes = m.codes.length
      ? el("ul", { class: "mascot-codes" }, m.codes.map(c =>
          el("li", { class: c.used ? "used" : "" }, el("code", {}, c.code), " · ", c.used ? T().used : T().unused)))
      : el("p", { class: "mascot-small" }, T().noCodes);
    const q = computeIQ(d);
    show(
      el("p", {}, el("strong", {}, `🧠 ${T().iqTitle}: ${q.score}`), ` · ${q.rank.icon} ${rankName(q.rank)}`),
      el("p", {}, say("learnProgress", { n: m.read.length, left })),
      el("p", {}, say("perfectStats", { total: m.perfectTotal, streak: m.perfectStreak })),
      el("p", { class: "mascot-small" }, next ? say("nextMilestone", { what: milestoneName(next) }) : T().allMilestones),
      el("p", {}, el("strong", {}, T().myCodes)), codes
    );
  }

  // ---------- 5) Wild IQ: a just-for-fun score ----------
  function computeIQ(d) {
    const c = CFG.iq, m = d.mascot;
    const best = d.bestByLevel || {};
    const parts = {
      read: m.read.length * c.perAnimalRead,
      perfect: Math.min(m.perfectTotal, c.maxPerfectRounds) * c.perPerfectRound,
      tcodes: m.codes.length * c.perTriviaCode,
      scodes: Math.min(m.redeemed.length, c.maxSecretCodes) * c.perSecretCode,
      best: Object.entries(c.perBestAnswer).reduce((sum, [lv, w]) => sum + (best[lv] || 0) * w, 0)
    };
    const score = Math.min(c.max, Math.round(c.base + Object.values(parts).reduce((a, b) => a + b, 0)));
    const ranks = [...c.ranks].sort((a, b) => a.min - b.min);
    const rank = ranks.filter(r => score >= r.min).pop();
    const next = ranks.find(r => r.min > score) || null;
    return { score, parts, rank, next };
  }

  const rankName = r => r[currentLang] || r.en;

  function showIQ() {
    const d = state(), q = computeIQ(d), c = CFG.iq;
    const pct = Math.round(((q.score - c.base) / (c.max - c.base)) * 100);
    const list = el("ul", { class: "iq-parts" },
      Object.entries(q.parts).map(([k, v]) => el("li", {}, el("span", {}, T().iqParts[k]), el("strong", {}, "+" + Math.round(v)))));
    show(
      el("p", { class: "iq-title" }, T().iqTitle),
      el("div", { class: "iq-score" }, String(q.score)),
      el("p", { class: "iq-rank" }, fill(T().iqRank, { icon: q.rank.icon, rank: rankName(q.rank) })),
      el("div", { class: "progress iq-bar", role: "img", "aria-label": `${q.score} / ${c.max}` },
        el("div", { class: "progress-bar", style: `width:${Math.max(2, pct)}%` })),
      el("p", { class: "mascot-small" }, q.next
        ? fill(T().iqNext, { n: q.next.min - q.score, icon: q.next.icon, rank: rankName(q.next) })
        : T().iqTop),
      list,
      el("p", { class: "mascot-small" }, T().iqHow),
      el("p", { class: "mascot-small iq-fun" }, T().iqFun)
    );
  }

  // After any reward: if the rank went up, Lento celebrates (returns the message or null)
  function checkRankUp() {
    const d = state(), q = computeIQ(d);
    const before = d.mascot.iqRank ?? null;
    if (before === q.rank.min) return null;
    d.mascot.iqRank = q.rank.min;
    Store.save(d);
    if (before === null || q.rank.min < before) return null;   // first time we measure: no fanfare
    return say("iqUp", { score: q.score, icon: q.rank.icon, rank: rankName(q.rank) });
  }

  // ---------- following the user around ----------
  function onRoute(route) {
    build();
    clearTimeout(readTimer);
    screen = route === "" ? "home"
      : route.startsWith("animal/") ? "animal"
      : route.startsWith("geography/") ? "region"
      : ["animals", "geography", "trivia", "cards", "favorites"].includes(route) ? route : "home";
    btn.setAttribute("aria-label", say("open"));
    if (screen === "animal") onAnimalView(decodeURIComponent(route.slice(7)));
    if (!panel.hidden) hide();
  }

  function start() {
    build();
    checkRankUp();
    btn.setAttribute("aria-label", say("open"));
    const d = state();
    if (!d.mascot.introDone) {
      d.mascot.introDone = true;
      Store.save(d);
      setTimeout(() => { show(el("p", {}, say("hello"))); wiggle(); }, 1200);
    }
  }

  return { onRoute, onRoundEnd, start, hide, computeIQ: () => computeIQ(state()) };
})();

// ---------- SHA-256 (turns a code into a scrambled "hash" so codes aren't readable in the files) ----------
function sha256(text) {
  const K = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  const bytes = new TextEncoder().encode(text);
  const len = bytes.length, bitLen = len * 8;
  const total = Math.ceil((len + 9) / 64) * 64;
  const buf = new Uint8Array(total); buf.set(bytes); buf[len] = 0x80;
  const dv = new DataView(buf.buffer);
  dv.setUint32(total - 8, Math.floor(bitLen / 2 ** 32)); dv.setUint32(total - 4, bitLen >>> 0);
  let h = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const w = new Uint32Array(64), rotr = (x, n) => (x >>> n) | (x << (32 - n));
  for (let off = 0; off < total; off += 64) {
    for (let i = 0; i < 16; i++) w[i] = dv.getUint32(off + i * 4);
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(w[i-15], 7) ^ rotr(w[i-15], 18) ^ (w[i-15] >>> 3);
      const s1 = rotr(w[i-2], 17) ^ rotr(w[i-2], 19) ^ (w[i-2] >>> 10);
      w[i] = (w[i-16] + s0 + w[i-7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, hh] = h;
    for (let i = 0; i < 64; i++) {
      const t1 = (hh + (rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) >>> 0;
      const t2 = ((rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) >>> 0;
      hh = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
    }
    h = h.map((v, i) => (v + [a, b, c, d, e, f, g, hh][i]) >>> 0);
  }
  return h.map(v => v.toString(16).padStart(8, "0")).join("");
}
