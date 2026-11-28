// ===== Games page + Memory Match =====
// Rules (pairs and points): data/game-rules.js → memory

// ---------- Games page ----------
function renderGames() {
  const box = document.getElementById("games");
  const d = Store.load();
  const tile = (href, icon, name, desc, extra) => el("a", { href, class: "game-tile" },
    el("span", { class: "game-icon", "aria-hidden": "true" }, icon),
    el("strong", {}, name), el("span", { class: "game-desc" }, desc), extra ? el("span", { class: "game-extra" }, extra) : "");
  const soon = (icon, name, desc) => el("div", { class: "game-tile soon", "aria-disabled": "true" },
    el("span", { class: "game-icon", "aria-hidden": "true" }, icon),
    el("strong", {}, name), el("span", { class: "game-desc" }, desc), el("span", { class: "game-extra" }, t("comingSoon")));
  box.replaceChildren(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "🎮 " + t("gamesTitle")),
    el("p", { class: "note" }, fill(t("gamesIntro"), { n: d.points })),
    el("div", { class: "game-grid" },
      tile("#/trivia", "❓", t("triviaTitle"), t("gameTriviaDesc")),
      tile("#/memory", "🧠", t("memoryTitle"), t("gameMemoryDesc"),
        d.memory?.played ? fill(t("memoryPlayed"), { n: d.memory.played }) : ""),
      soon("🗺️", t("mapDropTitle"), t("gameMapDesc")))
  );
}

// ---------- Memory Match ----------
const MEMORY_LEVELS = ["easy", "medium", "hard"];
const MEMORY_ICON = { easy: "🌱", medium: "🌿", hard: "🌳" };
let memoryMode = "photo";      // "photo" (picture ↔ name) or "lang" (English ↔ Spanish)
let memoryLevel = "easy";
let memoryGroup = "all";
let memoryGame = null;         // the game being played

function memoryRules() { return window.GAME_RULES.memory; }

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function newMemoryGame() {
  const pairs = memoryRules().levels[memoryLevel].pairs;
  let pool = window.ANIMALS.filter(a => memoryGroup === "all" || a.group === memoryGroup);
  // Picture mode: use animals with photos first (others show their emoji)
  if (memoryMode === "photo") {
    const withPhoto = pool.filter(a => a.photo && a.photo.cardOk);
    if (withPhoto.length >= pairs) pool = withPhoto;
  }
  // Avoid two animals with the same name in a game (keeps it fair)
  const picked = [];
  for (const a of shuffle(pool)) {
    if (picked.some(p => p.name.en === a.name.en || p.name.es === a.name.es)) continue;
    picked.push(a);
    if (picked.length === pairs) break;
  }
  const tiles = [];
  for (const a of picked) {
    if (memoryMode === "photo") {
      tiles.push({ id: a.id, face: "pic", animal: a });
      tiles.push({ id: a.id, face: "name", animal: a });
    } else {
      tiles.push({ id: a.id, face: "en", animal: a });
      tiles.push({ id: a.id, face: "es", animal: a });
    }
  }
  memoryGame = { tiles: shuffle(tiles), open: [], matched: new Set(), moves: 0, mistakes: 0, busy: false,
                 level: memoryLevel, mode: memoryMode, pairs: picked.length, done: false, result: null };
}

function renderMemory() {
  const box = document.getElementById("games");
  if (!memoryGame) return renderMemoryStart(box);
  if (memoryGame.done) return renderMemoryEnd(box);
  renderMemoryBoard(box);
}

function renderMemoryStart(box) {
  const R = memoryRules();
  const d = Store.load();
  const modes = el("div", { class: "mem-modes", role: "radiogroup", "aria-label": t("memoryModeLabel") },
    ...[["photo", "🖼️ ↔ 🔤", t("memoryModePhoto")], ["lang", "EN ↔ ES", t("memoryModeLang")]].map(([key, icon, label]) => {
      const b = el("button", { type: "button", class: "level-card", role: "radio", "aria-checked": String(memoryMode === key) },
        el("span", { class: "level-icon", "aria-hidden": "true" }, icon), el("strong", {}, label),
        el("span", { class: "level-desc" }, t(key === "photo" ? "memoryModePhotoDesc" : "memoryModeLangDesc")));
      b.addEventListener("click", () => { memoryMode = key; renderMemory(); });
      return b;
    }));
  const levels = el("div", { class: "level-picker", role: "radiogroup", "aria-label": t("chooseLevel") },
    ...MEMORY_LEVELS.map(lv => {
      const L = R.levels[lv];
      const best = d.memory?.best?.[lv];
      const b = el("button", { type: "button", class: `level-card`, role: "radio", "aria-checked": String(memoryLevel === lv) },
        el("span", { class: "level-icon", "aria-hidden": "true" }, MEMORY_ICON[lv]),
        el("strong", {}, t("memoryLevels")[lv]),
        el("span", { class: "level-desc" }, fill(t("memoryPairs"), { n: L.pairs })),
        el("span", { class: "level-meta" }, fill(t("memoryPrize"), { p: L.points }) +
          (best != null ? " · " + fill(t("memoryBest"), { n: best }) : "")));
      b.addEventListener("click", () => { memoryLevel = lv; renderMemory(); });
      return b;
    }));
  const play = el("button", { type: "button", class: "big-btn play-btn" },
    `${t("play")} ${MEMORY_ICON[memoryLevel]} ${t("memoryLevels")[memoryLevel]}`);
  play.addEventListener("click", () => { newMemoryGame(); renderMemory(); });
  box.replaceChildren(
    el("a", { href: "#/games", class: "back" }, t("backGames")),
    el("h2", { class: "screen-title" }, "🧠 " + t("memoryTitle")),
    el("p", { class: "note" }, fill(t("memoryHow"), { b: R.bonus })),
    el("h3", { class: "collection-title center" }, t("memoryModeLabel")), modes,
    el("h3", { class: "collection-title center" }, t("chooseLevel")), levels,
    el("h3", { class: "collection-title center" }, t("memoryGroupLabel")),
    groupChips(memoryGroup, g => { memoryGroup = g; renderMemory(); }),
    play
  );
}

function memoryFace(tile) {
  const a = tile.animal;
  if (tile.face === "pic") return el("div", { class: "mem-face mem-pic" },
    photoOrEmoji(a, { width: 300, allowPhoto: a.photo && a.photo.cardOk, cls: "mem-art" }));
  if (tile.face === "name") return el("div", { class: "mem-face mem-name" }, el("span", {}, a.name[currentLang]));
  return el("div", { class: "mem-face mem-name mem-" + tile.face },
    el("span", { class: "mem-flag" }, tile.face.toUpperCase()), el("span", {}, a.name[tile.face]));
}

function renderMemoryBoard(box) {
  const g = memoryGame;
  const grid = el("div", { class: `mem-grid mem-${g.tiles.length}` });
  g.tiles.forEach((tile, i) => {
    const isOpen = g.open.includes(i) || g.matched.has(tile.id);
    const btn = el("button", { type: "button", class: "mem-tile" + (isOpen ? " open" : "") + (g.matched.has(tile.id) ? " matched" : ""),
      "aria-label": isOpen ? (tile.face === "pic" ? tile.animal.name[currentLang] : tile.animal.name[tile.face === "name" ? currentLang : tile.face]) : t("memoryHidden") },
      el("div", { class: "mem-inner" },
        el("div", { class: "mem-back", "aria-hidden": "true" }, "🌿"),
        memoryFace(tile)));
    if (g.matched.has(tile.id)) btn.disabled = true;
    btn.addEventListener("click", () => flipMemory(i));
    grid.append(btn);
  });
  const quit = el("a", { href: "#/memory", class: "chip" }, t("quit"));
  quit.addEventListener("click", e => { e.preventDefault(); memoryGame = null; renderMemory(); });
  box.replaceChildren(
    el("div", { class: "mem-top" },
      el("span", { class: "mem-stat" }, fill(t("memoryFound"), { n: g.matched.size, total: g.pairs })),
      el("span", { class: "mem-stat" }, fill(t("memoryMoves"), { n: g.moves })),
      el("span", { class: "mem-stat" }, fill(t("memoryMistakes"), { n: g.mistakes })),
      quit),
    grid
  );
}

function flipMemory(i) {
  const g = memoryGame;
  if (!g || g.busy || g.open.includes(i) || g.matched.has(g.tiles[i].id)) return;
  g.open.push(i);
  if (g.open.length === 2) {
    g.moves++;
    const [a, b] = g.open.map(k => g.tiles[k]);
    if (a.id === b.id) {
      g.matched.add(a.id); g.open = [];
      if (g.matched.size === g.pairs) return finishMemory();
    } else {
      g.mistakes++; g.busy = true;
      renderMemory();
      setTimeout(() => { if (memoryGame !== g) return; g.open = []; g.busy = false; renderMemory(); }, 1000);
      return;
    }
  }
  renderMemory();
}

function finishMemory() {
  const g = memoryGame, R = memoryRules(), L = R.levels[g.level];
  const bonus = g.mistakes <= L.bonusMaxMistakes ? R.bonus : 0;
  const points = L.points + bonus;
  const d = Store.load();
  d.points += points; d.totalEarned = (d.totalEarned || 0) + points;
  d.memory = d.memory || { played: 0, best: {}, bonusByLevel: {} };
  d.memory.played = (d.memory.played || 0) + 1;
  d.memory.best = d.memory.best || {};
  d.memory.best[g.level] = Math.min(d.memory.best[g.level] ?? Infinity, g.mistakes);
  d.memory.bonusByLevel = d.memory.bonusByLevel || {};
  if (bonus) d.memory.bonusByLevel[g.level] = true;
  Store.save(d);
  g.done = true; g.result = { points, bonus };
  updateCounters();
  renderMemory();
}

function renderMemoryEnd(box) {
  const g = memoryGame;
  const again = el("button", { type: "button", class: "big-btn play-btn" }, t("playAgain"));
  again.addEventListener("click", () => { newMemoryGame(); renderMemory(); });
  const change = el("button", { type: "button", class: "chip" }, t("memoryChange"));
  change.addEventListener("click", () => { memoryGame = null; renderMemory(); });
  const found = el("div", { class: "mem-found" }, ...[...new Set(g.tiles.map(x => x.animal))].map(a =>
    el("a", { href: `#/animal/${a.id}`, class: "mem-found-item" }, a.emoji + " " + a.name[currentLang])));
  box.replaceChildren(
    el("a", { href: "#/games", class: "back" }, t("backGames")),
    el("div", { class: "trivia-end" },
      el("div", { class: "end-emoji", "aria-hidden": "true" }, g.result.bonus ? "🏆" : "🎉"),
      el("h2", { class: "screen-title" }, t("memoryWin")),
      el("p", {}, fill(t("memoryResult"), { pairs: g.pairs, moves: g.moves, mistakes: g.mistakes })),
      el("p", { class: "points-won" }, "+" + g.result.points + " ⭐"),
      g.result.bonus ? el("p", { class: "note" }, fill(t("memoryBonus"), { b: g.result.bonus })) : "",
      el("h3", { class: "collection-title center" }, t("memoryMeet")), found,
      again, change)
  );
}
