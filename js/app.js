// ===== Helpers =====
const ANIMALS = window.ANIMALS || [];
let currentLang = "en";

// Fill {placeholders} in a sentence
function fill(text, values) {
  return text.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? "");
}

// Make an HTML element safely (text is never treated as code)
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else node.setAttribute(k, v);
  }
  for (const child of children.flat()) {
    if (child == null) continue;
    node.append(child instanceof Node ? child : document.createTextNode(child));
  }
  return node;
}

// "Mono Tití" -> "mono titi" so searches work with or without accents
function plain(text) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function t(key) { return STRINGS[currentLang][key]; }

// ===== Language =====
const LANG_KEY = "animography.lang";

function getLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "es") return saved;
  } catch (e) { /* storage blocked: fall back below */ }
  return navigator.language && navigator.language.startsWith("es") ? "es" : "en";
}

function setLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  applyLang(lang);
  showScreen(); // redraw the screen in the new language
}

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    node.textContent = t(node.dataset.i18n) ?? node.dataset.i18n;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
    node.placeholder = t(node.dataset.i18nPlaceholder) ?? "";
  });
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
}

document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

// ===== Status badge =====
function statusBadge(code) {
  return el("span", { class: `status status-${code}` }, t("status")[code] || code);
}

// ===== Group filter chips (used on Animals and My Cards) =====
const GROUPS = ["all", "mammal", "bird", "reptile", "amphibian", "insect", "sea"];
let animalsFilter = "all";

// ===== Red List status filter (Animals screen) =====
// Each button can cover more than one IUCN code
const STATUS_FILTERS = {
  all: [], extinct: ["EX", "EW"], CR: ["CR"], EN: ["EN"], VU: ["VU"],
  NT: ["NT"], LC: ["LC"], unknown: ["DD", "NE"]
};
let statusFilter = "all";

function matchesStatus(a, key) {
  return key === "all" || STATUS_FILTERS[key].includes(a.status);
}

// Counts follow the animal-group button that is picked, so the numbers always match the list.
// active/onPick are optional (the Geography region pages use their own filter).
function statusChips(pool, active = statusFilter, onPick = key => { statusFilter = key; renderResults(); }) {
  const row = el("div", { class: "chips status-chips", role: "group", "aria-label": t("statusFilterLabel") },
    el("span", { class: "chips-label" }, t("statusFilterLabel")));
  for (const key of Object.keys(STATUS_FILTERS)) {
    const n = pool.filter(a => matchesStatus(a, key)).length;
    if (key !== "all" && n === 0 && active !== key) continue; // hide empty ones
    const chip = el("button", { type: "button", class: `chip chip-status chip-${key}`,
      "aria-pressed": String(key === active) },
      key === "all" ? "" : el("span", { class: "dot", "aria-hidden": "true" }),
      `${t("statusFilters")[key]} (${n})`);
    chip.addEventListener("click", () => onPick(key));
    row.append(chip);
  }
  return row;
}

// countFn (optional) decides what to count in each chip, e.g. cards you own
function groupChips(active, onPick, countFn) {
  const row = el("div", { class: "chips", role: "group", "aria-label": t("filterLabel") });
  for (const g of GROUPS) {
    const inGroup = ANIMALS.filter(a => g === "all" || a.group === g);
    const label = t("groupsPlural")[g] + " " + (countFn
      ? `${inGroup.filter(countFn).length}/${inGroup.length}`
      : `(${inGroup.length})`);
    const chip = el("button", { type: "button", class: "chip", "aria-pressed": String(g === active) }, label);
    chip.addEventListener("click", () => onPick(g));
    row.append(chip);
  }
  return row;
}

// ===== Animals: search list =====
const searchBox = document.getElementById("animal-search");

function renderResults() {
  const q = plain(searchBox.value.trim());
  const chipBox = document.getElementById("animal-chips");
  const inGroup = ANIMALS.filter(a => animalsFilter === "all" || a.group === animalsFilter);
  chipBox.replaceChildren(
    groupChips(animalsFilter, g => { animalsFilter = g; renderResults(); }),
    statusChips(inGroup)
  );
  const matches = inGroup
    .filter(a => matchesStatus(a, statusFilter))
    .filter(a => !q ||
      plain(a.name.en).includes(q) ||
      plain(a.name.es).includes(q) ||
      plain(a.scientific).includes(q))
    .sort((a, b) => a.name[currentLang].localeCompare(b.name[currentLang], currentLang));

  const box = document.getElementById("results");
  box.replaceChildren();
  document.getElementById("results-count").textContent =
    matches.length ? (matches.length === 1 ? t("resultsCountOne") : fill(t("resultsCount"), { n: matches.length })) : t("noResults");

  for (const a of matches) box.append(animalButton(a));
}

function animalButton(a) {
  return el("a", { class: "animal-btn", href: `#/animal/${a.id}` },
    el("span", { class: "animal-btn-emoji", "aria-hidden": "true" }, a.emoji),
    el("span", { class: "animal-btn-text" },
      el("strong", {}, a.name[currentLang]),
      el("em", {}, a.scientific)
    ),
    Store.isFavorite(a.id) ? el("span", { class: "fav-mark", "aria-hidden": "true" }, "❤️") : null,
    statusBadge(a.status)
  );
}

// ===== Favorites =====
function heartButton(a) {
  const btn = el("button", { type: "button", class: "heart-btn" });
  const paint = () => {
    const on = Store.isFavorite(a.id);
    btn.textContent = (on ? "❤️ " : "♡ ") + (on ? t("removeFavorite") : t("addFavorite"));
    btn.setAttribute("aria-pressed", String(on));
    btn.classList.toggle("on", on);
  };
  btn.addEventListener("click", () => {
    Store.toggleFavorite(a.id);
    paint();
    updateCounters();
    btn.classList.remove("pop"); void btn.offsetWidth; btn.classList.add("pop");
  });
  paint();
  return btn;
}

function renderFavorites() {
  const box = document.getElementById("favorites-list");
  box.replaceChildren();
  const favs = Store.load().favorites
    .map(id => ANIMALS.find(a => a.id === id))
    .filter(Boolean);
  if (!favs.length) {
    box.append(el("div", { class: "empty" },
      el("p", {}, t("favoritesEmpty")),
      el("a", { href: "#/animals", class: "big-btn small" }, t("browseAnimals"))
    ));
    return;
  }
  favs.forEach(a => box.append(animalButton(a)));
}

// Numbers in the top bar
function updateCounters() {
  const d = Store.load();
  document.getElementById("fav-count").textContent = d.favorites.length;
  document.getElementById("points-count").textContent = d.points;
  document.getElementById("cards-count").textContent = Object.values(d.cards).filter(n => n > 0).length;
  Badges.check();   // set rewards and new badges (js/collection.js)
  document.getElementById("badges-count").textContent = Object.keys(Store.load().badges || {}).length;
}

searchBox.addEventListener("input", renderResults);

// ===== One animal page =====
function section(title, ...content) {
  return el("section", { class: "info-card" }, el("h3", {}, title), ...content);
}

function renderAnimal(id) {
  const a = ANIMALS.find(x => x.id === id);
  const box = document.getElementById("animal-detail");
  box.replaceChildren();

  const back = el("a", { href: "#/animals", class: "back" }, t("backToAnimals"));

  if (!a) {
    box.append(back, el("p", { class: "note" }, t("notFound")));
    return;
  }

  const L = currentLang;
  const extinct = a.status === "EX";
  const q = encodeURIComponent(a.scientific);
  const ytQuery = encodeURIComponent(`${a.name[L]} ${a.scientific} Costa Rica`);

  box.append(
    back,

    // Picture at the top: real photo from Wikimedia Commons (emoji if there's no photo)
    (() => {
      const hero = photoOrEmoji(a, { width: 1000, allowPhoto: true, cls: `hero hero-${a.group}` });
      if (!a.photo) hero.append(el("span", { class: "hero-note" }, a.photoWanted ? t("photoWantedLong") : t("photoSoon")));
      return hero;
    })(),
    !a.photo && a.photoWanted ? el("p", { class: "photo-credit photo-wanted-note" }, t("photoWantedHelp")) : "",
    a.photo ? el("p", { class: "photo-credit" },
      el("a", { href: photoPage(a.photo), target: "_blank", rel: "noopener" }, photoCredit(a.photo))) : "",
    photoContactNote(a.photo),

    el("h2", { class: "animal-name" }, a.name[L]),
    el("p", { class: "scientific" }, a.scientific, " · ", t("groups")[a.group]),
    el("div", { class: "animal-actions" },
      heartButton(a),
      // 🔊 reads the page out loud: name, status and every info card except the links
      ReadAloud.makeButton(() => [box.querySelector(".animal-name"), box.querySelector(".scientific"),
        box.querySelector(".status-row .status"), box.querySelector(".status-note"),
        ...[...box.querySelectorAll(".info-card")].filter(n => !n.querySelector(".links"))])),
    sightingBox(a),

    el("div", { class: "status-row" },
      statusBadge(a.status),
      el("span", { class: "draft" }, t("draftBadge"))
    ),
    a.statusNote ? el("p", { class: "status-note" }, a.statusNote[L])
      : a.status === "NE" ? el("p", { class: "status-note" }, t("neNote")) : "",
    el("p", { class: "checked" }, fill(t("statusChecked"), { date: a.checked })),

    section(t("about"), el("p", {}, a.summary[L])),
    sizeSection(a),
    section(t("where"), el("p", {}, a.where[L]), regionLinks(a)),
    section(extinct ? t("threatsExtinct") : t("threats"), el("p", {}, a.threats[L])),
    section(extinct ? t("helpExtinct") : t("help"),
      el("ul", { class: "help-list" }, a.help[L].map(item => el("li", {}, item)))
    ),
    el("section", { class: "info-card fun" },
      el("h3", {}, "✨ " + t("funFact")),
      el("p", {}, a.funFact[L])
    ),
    // Extra sections (optional field "more" in the animal's data)
    ...(a.more || []).map(m => el("section", { class: "info-card more" + (m.style ? " more-" + m.style : "") },
      el("h3", {}, (m.icon ? m.icon + " " : "") + m.title[L]),
      ...m.text[L].map(p => el("p", {}, p))
    )),
    section(t("learnMore"),
      el("div", { class: "links" },
        el("a", { href: `https://www.iucnredlist.org/search?query=${q}`, target: "_blank", rel: "noopener" }, t("linkIucn")),
        el("a", { href: `https://${L}.wikipedia.org/wiki/Special:Search?search=${q}`, target: "_blank", rel: "noopener" }, t("linkWiki")),
        el("a", { href: `https://www.youtube.com/results?search_query=${ytQuery}`, target: "_blank", rel: "noopener" }, t("linkVideos"))
      )
    )
  );
}

// ===== Screens (uses the # in the address, so the browser Back button works) =====
function showScreen() {
  const route = location.hash.replace(/^#\/?/, "");
  let id = "screen-home";

  if (route === "animals") { id = "screen-animals"; renderResults(); }
  else if (route.startsWith("animal/")) { id = "screen-animal"; renderAnimal(decodeURIComponent(route.slice(7))); }
  else if (route === "trivia") { id = "screen-trivia"; renderTrivia(); }
  else if (route === "cards") { id = "screen-cards"; renderCardsScreen(); }
  else if (route === "binders") { id = "screen-binders"; renderBinders(); }
  else if (route === "trade") { id = "screen-cards"; renderTrade(); }
  else if (route === "sets") { id = "screen-cards"; renderSets(); }
  else if (route === "badges") { id = "screen-badges"; renderBadges(); }
  else if (route === "games") { id = "screen-games"; renderGames(); }
  else if (route === "memory") { id = "screen-games"; renderMemory(); }
  else if (route === "mapdrop") { id = "screen-games"; renderMapDrop(); }
  else if (route === "sightings") { id = "screen-sightings"; renderSightings(); }
  else if (route === "hope") { id = "screen-hope"; renderHope(); }
  else if (route.startsWith("hope/")) { id = "screen-hope"; renderHopeStory(decodeURIComponent(route.slice(5))); }
  else if (route === "compare" || route.startsWith("compare/")) {
    id = "screen-compare";
    const [, x, y] = route.split("/").map(decodeURIComponent);
    renderCompare(x, y);
  }
  else if (route.startsWith("binder/")) { id = "screen-binders"; renderBinder(decodeURIComponent(route.slice(7))); }
  else if (route === "favorites") { id = "screen-favorites"; renderFavorites(); }
  else if (route === "geography") { id = "screen-geography"; renderGeography(); }
  else if (route.startsWith("geography/")) { id = "screen-geography"; renderRegion(decodeURIComponent(route.slice(10))); }

  document.querySelectorAll(".screen").forEach(s => { s.hidden = s.id !== id; });
  Mascot.onRoute(route);
}

window.addEventListener("hashchange", () => {
  if (location.hash !== "#/trivia") round = null; // leaving trivia ends an unfinished round
  if (location.hash !== "#/cards") reveal = null;
  if (location.hash !== "#/trade") lastTrade = null;
  if (location.hash !== "#/memory") memoryGame = null; // leaving Memory Match ends the game
  if (location.hash !== "#/mapdrop") mapGame = null;
  ReadAloud.stop(); // stop reading when you go to another page
  showScreen();
  window.scrollTo(0, 0);
});

// ===== Start =====
applyLang(getLang());
updateCounters();
showScreen();
Mascot.start();
