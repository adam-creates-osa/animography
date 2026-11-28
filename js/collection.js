// ===== Trading with Lento, set rewards and badges =====
// Rules (numbers): data/game-rules.js → trade, sets · Badge list: data/badges.js

const RARITY_ORDER = ["common", "rare", "special", "secretRare"];
let lastTrade = null; // result of the last trade, shown on the Trade tab

// Lento's picture
function slothFace(cls) { const n = el("div", { class: cls, "aria-hidden": "true" }); n.innerHTML = SLOTH_SVG; return n; }

// ---------- small pop-up messages ("toasts") ----------
const Toast = (() => {
  let box = null, queue = [], busy = false;
  function next() {
    if (busy || !queue.length) return;
    busy = true;
    if (!box) { box = el("div", { class: "toast-area", role: "status", "aria-live": "polite" }); document.body.append(box); }
    const { icon, title, text } = queue.shift();
    const toast = el("div", { class: "toast" }, el("span", { class: "toast-icon", "aria-hidden": "true" }, icon),
      el("div", {}, el("strong", {}, title), text ? el("p", {}, text) : ""));
    box.append(toast);
    setTimeout(() => toast.classList.add("show"), 20);
    setTimeout(() => { toast.classList.remove("show"); setTimeout(() => { toast.remove(); busy = false; next(); }, 300); }, 3800);
  }
  return { show(icon, title, text) { queue.push({ icon, title, text }); next(); } };
})();

// ---------- trading ----------
const Collection = {
  // Copies of a card you can trade: everything except 1 copy and the copies placed in binders
  tradable(d, id) {
    const used = (d.binders || []).reduce((n, b) => n + b.cards.filter(c => c === id).length, 0);
    return Math.max(0, (d.cards[id] || 0) - Math.max(1, used));
  },
  duplicates(d) {
    return window.ANIMALS.map(a => ({ a, n: this.tradable(d, a.id) })).filter(x => x.n > 0)
      // Commons go first, then the cards you have the most extras of
      .sort((x, y) => RARITY_ORDER.indexOf(rarityOf(x.a)) - RARITY_ORDER.indexOf(rarityOf(y.a)) || y.n - x.n);
  },
  totalDuplicates(d) { return this.duplicates(d).reduce((n, x) => n + x.n, 0); },
  randomOf(rarity, d) {
    const pool = window.ANIMALS.filter(a => rarityOf(a) === rarity);
    const notOwned = pool.filter(a => !(d.cards[a.id] > 0));
    const from = notOwned.length ? notOwned : pool;
    return from[Math.floor(Math.random() * from.length)];
  },
  // Trade duplicates for a random card of this rarity. Returns { given, animal, isNew } or null.
  trade(rarity) {
    const cost = window.GAME_RULES.trade[rarity];
    const d = Store.load();
    if (!cost || this.totalDuplicates(d) < cost) return null;
    const given = [];
    let left = cost;
    for (const { a, n } of this.duplicates(d)) {
      const take = Math.min(n, left);
      if (!take) continue;
      d.cards[a.id] -= take; given.push({ animal: a, n: take }); left -= take;
      if (!left) break;
    }
    const animal = this.randomOf(rarity, d);
    const isNew = !(d.cards[animal.id] > 0);
    d.cards[animal.id] = (d.cards[animal.id] || 0) + 1;
    d.trades = (d.trades || 0) + 1;
    Store.save(d);
    return { given, animal, isNew };
  }
};

// ---------- progress numbers used by sets and badges ----------
function collectionStats(d) {
  const owned = window.ANIMALS.filter(a => d.cards[a.id] > 0);
  const byRarity = { common: 0, rare: 0, special: 0, secretRare: 0 };
  owned.forEach(a => byRarity[rarityOf(a)]++);
  const groupDone = {}, groupCount = {};
  for (const g of GROUPS.filter(g => g !== "all")) {
    const all = window.ANIMALS.filter(a => a.group === g);
    groupCount[g] = { have: all.filter(a => d.cards[a.id] > 0).length, total: all.length };
    groupDone[g] = all.length > 0 && groupCount[g].have === all.length;
  }
  const m = d.mascot || {};
  const per = window.GAME_RULES.questionsPerRound;
  const best = d.bestByLevel || {};
  return {
    owned: owned.length, byRarity, groupDone, groupCount,
    allDone: owned.length === window.ANIMALS.length,
    binders: (d.binders || []).length,
    biggestBinder: Math.max(0, ...(d.binders || []).map(b => b.cards.length)),
    trades: d.trades || 0,
    read: (m.read || []).length,
    favorites: (d.favorites || []).length,
    rounds: d.roundsPlayed || (d.rounds || []).length,
    perfect: m.perfectTotal || 0,
    perfectLevel: { beginner: (best.beginner || 0) >= per, intermediate: (best.intermediate || 0) >= per, advanced: (best.advanced || 0) >= per },
    earned: d.totalEarned || 0,
    codes: (m.redeemed || []).length
  };
}

// ---------- set rewards + badges: checked after every change (from updateCounters) ----------
const Badges = (() => {
  let checking = false;
  function check() {
    if (checking) return;
    checking = true;
    try {
      const d = Store.load();
      const R = window.GAME_RULES.sets;
      d.setsDone = d.setsDone || {};
      const firstTime = !d.badges;   // players from before badges existed: give earned badges quietly
      d.badges = d.badges || {};
      let quiet = 0;
      let s = collectionStats(d);
      let changed = false;
      const name = g => t("groupsPlural")[g] || g;

      // Set rewards (once each)
      for (const g of Object.keys(s.groupDone)) {
        if (s.groupDone[g] && !d.setsDone[g]) {
          d.setsDone[g] = new Date().toISOString();
          d.points += R.groupBonus; d.totalEarned = (d.totalEarned || 0) + R.groupBonus;
          Toast.show("🏆", fill(t("setDoneTitle"), { group: name(g) }), fill(t("setDoneText"), { n: R.groupBonus }));
          changed = true;
        }
      }
      if (s.allDone && !d.setsDone.all) {
        d.setsDone.all = new Date().toISOString();
        const card = Collection.randomOf(R.allReward || "secretRare", d);
        d.cards[card.id] = (d.cards[card.id] || 0) + 1;
        Toast.show("👑", t("allDoneTitle"), fill(t("allDoneText"), { name: card.name[currentLang] }));
        changed = true;
      }
      if (changed) s = collectionStats(d);

      // Badges (once earned, they stay)
      for (const b of window.BADGES) {
        let ok = false;
        try { ok = Boolean(b.test(s)); } catch (e) { ok = false; }
        if (ok && !d.badges[b.id]) {
          d.badges[b.id] = new Date().toISOString();
          if (firstTime) quiet++;
          else Toast.show(b.icon, fill(t("badgeNew"), { name: b.name[currentLang] }), "");
          changed = true;
        }
      }
      if (firstTime) changed = true;
      if (quiet) Toast.show("🏅", fill(t("badgesWelcome"), { n: quiet }), t("badgesWelcomeText"));
      if (changed) { Store.save(d); updateCounters(); }
    } finally { checking = false; }
  }
  return { check };
})();

// ---------- Trade tab ----------
function renderTrade() {
  const box = document.getElementById("cards");
  const d = Store.load();
  const R = window.GAME_RULES.trade;
  const total = Collection.totalDuplicates(d);
  const offers = el("div", { class: "trade-offers" });
  for (const rarity of ["rare", "special"]) {
    const cost = R[rarity];
    const btn = el("button", { type: "button", class: "big-btn small" }, fill(t("tradeBtn"), { n: cost }));
    btn.disabled = total < cost;
    btn.addEventListener("click", () => {
      lastTrade = Collection.trade(rarity);
      updateCounters();
      renderTrade();
      document.querySelector(".trade-result")?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    offers.append(el("div", { class: `trade-offer offer-${rarity}` },
      el("div", { class: "offer-icon", "aria-hidden": "true" }, t("rarityIcon")[rarity]),
      el("strong", {}, fill(t("tradeOffer"), { n: cost, rarity: t("rarity")[rarity] })),
      el("p", { class: "note" }, total >= cost ? fill(t("tradeCan"), { n: Math.floor(total / cost) }) : fill(t("tradeNeed"), { n: cost - total })),
      btn));
  }

  let result = "";
  if (lastTrade) {
    const { given, animal, isNew } = lastTrade;
    result = el("div", { class: "trade-result" },
      el("p", { class: "reveal-title" }, isNew ? t("tradeNew") : t("tradeDup")),
      el("div", { class: "reveal-card" }, renderCard(animal)),
      el("p", { class: "note" }, t("tradeGave"), " ", given.map(g => g.animal.name[currentLang] + (g.n > 1 ? " ×" + g.n : "")).join(", ")));
  }

  const dupes = Collection.duplicates(d);
  const list = dupes.length
    ? el("ul", { class: "dupe-list" }, ...dupes.map(({ a, n }) =>
        el("li", { class: `dupe dupe-${rarityOf(a)}` }, t("rarityIcon")[rarityOf(a)] + " " + a.name[currentLang], el("strong", {}, " ×" + n))))
    : el("p", { class: "note" }, t("tradeNone"));

  box.replaceChildren(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "🤝 " + t("tradeTitle")),
    cardTabs("trade"),
    el("div", { class: "lento-says" },
      slothFace("lento-face"),
      el("p", { class: "lento-bubble" }, fill(t("tradeLento"), { n: total }))),
    offers,
    result,
    el("h3", { class: "collection-title" }, fill(t("tradeYourDupes"), { n: total })),
    el("p", { class: "note" }, t("tradeRules")),
    list
  );
}

// ---------- Sets tab ----------
function renderSets() {
  const box = document.getElementById("cards");
  const d = Store.load();
  const s = collectionStats(d);
  const R = window.GAME_RULES.sets;
  const done = d.setsDone || {};
  const row = (label, have, total, reward, isDone) => {
    const pct = total ? Math.round(have / total * 100) : 0;
    return el("div", { class: "set-row" + (isDone ? " set-done" : "") },
      el("div", { class: "set-head" }, el("strong", {}, label), el("span", {}, `${have}/${total}`)),
      el("div", { class: "progress" }, el("div", { class: "progress-bar", style: `width:${Math.max(2, pct)}%` })),
      el("p", { class: "set-reward" }, isDone ? "✅ " + t("setCompleted") : "🎁 " + reward));
  };
  const rows = GROUPS.filter(g => g !== "all").map(g =>
    row(t("groupsPlural")[g], s.groupCount[g].have, s.groupCount[g].total,
      fill(t("setReward"), { n: R.groupBonus }), Boolean(done[g])));
  box.replaceChildren(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "🏆 " + t("setsTitle")),
    cardTabs("sets"),
    el("p", { class: "note" }, t("setsIntro")),
    el("div", { class: "sets" }, ...rows,
      row("👑 " + t("setAll"), s.owned, window.ANIMALS.length, t("setAllReward"), Boolean(done.all))),
    el("p", { class: "note" }, el("a", { href: "#/badges", class: "learn-link" }, "🏅 " + t("seeBadges")))
  );
}

// ---------- Badges page ----------
function renderBadges() {
  const box = document.getElementById("badges");
  const d = Store.load();
  d.mascot = { read: [], perfectTotal: 0, perfectStreak: 0, codes: [], redeemed: [], ...(d.mascot || {}) };
  const earned = d.badges || {};
  const iq = Mascot.computeIQ(d);
  const n = window.BADGES.filter(b => earned[b.id]).length;
  const date = iso => new Date(iso).toLocaleDateString(currentLang === "es" ? "es-CR" : "en-US", { day: "numeric", month: "short", year: "numeric" });
  const shelf = el("div", { class: "badge-shelf" }, ...window.BADGES.map(b => {
    const got = earned[b.id];
    return el("div", { class: "badge" + (got ? " earned" : " locked") },
      el("div", { class: "badge-icon", "aria-hidden": "true" }, got ? b.icon : "🔒"),
      el("strong", { class: "badge-name" }, b.name[currentLang]),
      el("p", { class: "badge-how" }, got ? "✅ " + date(got) : b.how[currentLang]));
  }));
  box.replaceChildren(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "🏅 " + t("badgesTitle")),
    el("div", { class: "iq-card" },
      slothFace("lento-face small"),
      el("div", {},
        el("p", { class: "iq-label" }, t("wildIQ")),
        el("p", { class: "iq-big" }, String(iq.score)),
        el("p", {}, `${iq.rank.icon} ${iq.rank[currentLang] || iq.rank.en}`))),
    el("p", { class: "badge-count" }, fill(t("badgesCount"), { n, total: window.BADGES.length })),
    el("div", { class: "progress" }, el("div", { class: "progress-bar", style: `width:${Math.max(2, Math.round(n / window.BADGES.length * 100))}%` })),
    shelf
  );
}
