// ===== Map Drop: drag each animal to a region where it lives =====
// Rules: data/game-rules.js → mapDrop · Regions: data/regions.js

let mapGroup = "all";
let mapGame = null;

function newMapGame() {
  const R = window.GAME_RULES.mapDrop;
  const all = shuffle(window.ANIMALS.filter(a => regionsOf(a).length && (mapGroup === "all" || a.group === mapGroup)));
  // Animals that live in only 1-3 regions come first (living almost everywhere would be too easy)
  const pool = [...all.filter(a => regionsOf(a).length <= R.maxRegions), ...all.filter(a => regionsOf(a).length > R.maxRegions)];
  // Mix it up: try not to pick too many animals from the same region
  const picked = [], seenFirst = {};
  for (const a of pool) {
    const key = regionsOf(a)[0];
    if ((seenFirst[key] || 0) >= 2 && pool.length > R.animals * 3) continue;
    picked.push(a); seenFirst[key] = (seenFirst[key] || 0) + 1;
    if (picked.length === R.animals) break;
  }
  mapGame = { animals: picked, index: 0, correct: 0, answer: null, results: [], done: false, saved: false };
}

function renderMapDrop() {
  const box = document.getElementById("games");
  if (!mapGame) return renderMapStart(box);
  if (mapGame.done) return renderMapEnd(box);
  renderMapPlay(box);
}

function renderMapStart(box) {
  const R = window.GAME_RULES.mapDrop;
  const d = Store.load();
  const play = el("button", { type: "button", class: "big-btn play-btn" }, "▶ " + t("play"));
  play.addEventListener("click", () => { newMapGame(); renderMapDrop(); });
  box.replaceChildren(
    el("a", { href: "#/games", class: "back" }, t("backGames")),
    el("h2", { class: "screen-title" }, "🗺️ " + t("mapDropTitle")),
    el("p", { class: "note" }, fill(t("mapHow"), { n: R.animals, p: R.pointsPerCorrect })),
    d.mapDrop?.best != null ? el("p", { class: "note" }, fill(t("mapBest"), { n: d.mapDrop.best, total: R.animals })) : "",
    el("h3", { class: "collection-title center" }, t("memoryGroupLabel")),
    groupChips(mapGroup, g => { mapGroup = g; renderMapDrop(); }),
    play
  );
}

function renderMapPlay(box) {
  const g = mapGame;
  const a = g.animals[g.index];
  const L = currentLang;
  const right = regionsOf(a);
  const map = renderMap(true);
  const answered = g.answer != null;

  // Color the markers after answering: green = where it lives, red = your wrong pick
  map.querySelectorAll(".drop-zone").forEach(z => {
    const id = z.dataset.region;
    if (answered) {
      if (right.includes(id)) z.classList.add("zone-right");
      else if (id === g.answer) z.classList.add("zone-wrong");
      else z.classList.add("zone-dim");
    } else {
      const pick = () => answerMap(id);
      z.addEventListener("click", pick);
      z.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
    }
  });

  const card = el("div", { class: "map-animal" + (answered ? "" : " draggable") },
    photoOrEmoji(a, { width: 300, allowPhoto: a.photo && a.photo.cardOk, cls: "map-art" }),
    el("div", { class: "map-animal-text" },
      el("strong", {}, a.name[L]),
      el("span", { class: "map-group" }, t("groups")[a.group]),
      answered ? "" : el("span", { class: "map-hint" }, t("mapHint"))));
  if (!answered) makeMapDraggable(card);

  let feedback = "";
  if (answered) {
    const ok = right.includes(g.answer);
    const names = right.map(id => regionById(id).name[L]).join(", ");
    const next = el("button", { type: "button", class: "big-btn small" },
      g.index + 1 < g.animals.length ? t("next") : t("mapSeeResults"));
    next.addEventListener("click", () => {
      g.index++; g.answer = null;
      if (g.index >= g.animals.length) finishMapGame();
      renderMapDrop();
    });
    feedback = el("div", { class: "map-feedback " + (ok ? "ok" : "bad"), role: "status" },
      el("p", {}, el("strong", {}, ok ? t("mapRight") : t("mapWrong")), " ", fill(t("mapLivesIn"), { name: a.name[L], regions: names })),
      el("a", { href: `#/animal/${a.id}`, class: "learn-link", target: "_blank" }, fill(t("meetAnimal"), { name: a.name[L] })),
      next);
    setTimeout(() => next.focus(), 30);
  }

  const quit = el("a", { href: "#/mapdrop", class: "chip" }, t("quit"));
  quit.addEventListener("click", e => { e.preventDefault(); mapGame = null; renderMapDrop(); });

  box.replaceChildren(
    el("div", { class: "mem-top" },
      el("span", { class: "mem-stat" }, `${g.index + 1}/${g.animals.length}`),
      el("span", { class: "mem-stat" }, "✅ " + g.correct),
      quit),
    el("div", { class: "map-game" },
      el("div", { class: "map-side" }, card, feedback),
      el("div", { class: "map-wrap" }, map))
  );
}

function answerMap(regionId) {
  const g = mapGame;
  if (!g || g.answer != null) return;
  const a = g.animals[g.index];
  const ok = regionsOf(a).includes(regionId);
  g.answer = regionId;
  if (ok) g.correct++;
  g.results.push({ animal: a, ok });
  renderMapDrop();
}

function finishMapGame() {
  const g = mapGame, R = window.GAME_RULES.mapDrop;
  g.done = true;
  if (g.saved) return;
  g.saved = true;
  g.points = g.correct * R.pointsPerCorrect;
  const d = Store.load();
  d.points += g.points; d.totalEarned = (d.totalEarned || 0) + g.points;
  d.mapDrop = d.mapDrop || { played: 0, perfect: 0, best: null };
  d.mapDrop.played++;
  if (g.correct === g.animals.length) d.mapDrop.perfect++;
  d.mapDrop.best = Math.max(d.mapDrop.best ?? 0, g.correct);
  Store.save(d);
  updateCounters();
}

function renderMapEnd(box) {
  const g = mapGame;
  const L = currentLang;
  const again = el("button", { type: "button", class: "big-btn play-btn" }, t("playAgain"));
  again.addEventListener("click", () => { newMapGame(); renderMapDrop(); });
  const change = el("button", { type: "button", class: "chip" }, t("mapChange"));
  change.addEventListener("click", () => { mapGame = null; renderMapDrop(); });
  const perfect = g.correct === g.animals.length;
  box.replaceChildren(
    el("a", { href: "#/games", class: "back" }, t("backGames")),
    el("div", { class: "trivia-end" },
      el("div", { class: "end-emoji", "aria-hidden": "true" }, perfect ? "🏆" : "🗺️"),
      el("h2", { class: "screen-title" }, perfect ? t("mapPerfect") : t("mapDone")),
      el("p", {}, fill(t("mapScore"), { n: g.correct, total: g.animals.length })),
      el("p", { class: "points-won" }, "+" + g.points + " ⭐"),
      el("ul", { class: "map-results" }, ...g.results.map(r =>
        el("li", { class: r.ok ? "ok" : "bad" }, (r.ok ? "✅ " : "❌ "),
          el("a", { href: `#/animal/${r.animal.id}` }, r.animal.name[L]), " → ",
          regionsOf(r.animal).map(id => regionById(id).name[L]).join(", ")))),
      again, change)
  );
}

// Drag the animal card onto the map (mouse, touch, pen). Tapping a region works too.
function makeMapDraggable(card) {
  let ghost = null, pointerId = null, sx = 0, sy = 0, dragging = false;
  const zoneAt = (x, y) => { const n = document.elementFromPoint(x, y); return n && n.closest ? n.closest(".drop-zone") : null; };
  const clear = () => document.querySelectorAll(".zone-hover").forEach(z => z.classList.remove("zone-hover"));
  card.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    pointerId = e.pointerId; sx = e.clientX; sy = e.clientY; dragging = false;
    try { card.setPointerCapture(e.pointerId); } catch (_) {}
  });
  card.addEventListener("pointermove", e => {
    if (e.pointerId !== pointerId) return;
    if (!dragging) {
      if (Math.abs(e.clientX - sx) + Math.abs(e.clientY - sy) < 6) return;
      dragging = true;
      ghost = card.cloneNode(true); ghost.classList.add("drag-ghost", "map-ghost");
      ghost.style.width = Math.min(card.offsetWidth, 220) + "px";
      document.body.append(ghost); card.classList.add("dragging"); document.body.classList.add("is-dragging");
    }
    e.preventDefault();
    ghost.style.left = (e.clientX - ghost.offsetWidth / 2) + "px";
    ghost.style.top = (e.clientY - ghost.offsetHeight / 2) + "px";
    clear(); zoneAt(e.clientX, e.clientY)?.classList.add("zone-hover");
  });
  const end = (e, cancel) => {
    if (e.pointerId !== pointerId) return;
    pointerId = null;
    if (!dragging) return;
    dragging = false;
    const zone = cancel ? null : zoneAt(e.clientX, e.clientY);
    ghost?.remove(); ghost = null; clear();
    card.classList.remove("dragging"); document.body.classList.remove("is-dragging");
    if (zone) answerMap(zone.dataset.region);
  };
  card.addEventListener("pointerup", e => end(e, false));
  card.addEventListener("pointercancel", e => end(e, true));
}
