// ===== Geography: animals by natural region =====
// Uses: window.REGIONS, window.ANIMAL_REGIONS, ANIMALS, el(), t(), fill(), currentLang, animalButton(), groupChips()

const SVG_NS = "http://www.w3.org/2000/svg";
let regionGroupFilter = "all";
let lastRegion = null; // the filter resets when you open a different region

function regionById(id) { return window.REGIONS.find(r => r.id === id); }
// Only regions that exist in data/regions.js count (so a deleted region is simply ignored)
function regionsOf(animal) {
  return (window.ANIMAL_REGIONS[animal.id] || []).filter(id => window.REGIONS.some(r => r.id === id));
}
function animalsIn(regionId) { return ANIMALS.filter(a => regionsOf(a).includes(regionId)); }

// Turn latitude/longitude into a spot on the drawing
function project(lat, lon) { return [(lon + 86.0) * 160 + 20, (11.3 - lat) * 160 + 20]; }

// Simplified outline of Costa Rica (not exact borders)
const OUTLINE = [
  [11.07,-85.69],[11.21,-85.61],[11.13,-85.3],[11.03,-84.9],[10.95,-84.7],[10.72,-84.25],[10.78,-84.0],[10.93,-83.68],
  [10.6,-83.53],[10.3,-83.38],[10.0,-83.04],[9.75,-82.84],[9.57,-82.56],[9.48,-82.84],[9.1,-82.93],[8.9,-82.75],
  [8.6,-82.83],[8.3,-82.9],[8.03,-82.88],[8.3,-82.97],[8.4,-83.1],[8.62,-83.17],[8.7,-83.3],[8.53,-83.3],[8.38,-83.3],
  [8.45,-83.55],[8.55,-83.7],[8.7,-83.72],[8.95,-83.65],[9.15,-83.75],[9.3,-83.95],[9.43,-84.17],[9.6,-84.6],
  [9.8,-84.66],[9.97,-84.83],[10.15,-85.0],[10.27,-85.22],[10.05,-85.12],[9.82,-84.95],[9.68,-85.03],[9.56,-85.11],
  [9.62,-85.25],[9.87,-85.52],[9.98,-85.67],[10.15,-85.78],[10.3,-85.84],[10.45,-85.8],[10.6,-85.72],[10.78,-85.88],
  [10.9,-85.95],[11.0,-85.8]
];

function svg(tag, attrs = {}, ...kids) {
  const n = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  kids.forEach(k => n.append(k));
  return n;
}

// A tappable marker: colored circle + emoji + short label
function marker(region, x, y) {
  const L = currentLang;
  const count = animalsIn(region.id).length;
  const link = svg("a", { href: `#/geography/${region.id}`, class: "map-marker",
    "aria-label": `${region.name[L]}: ${fill(t("regionCount"), { n: count })}` });
  link.append(
    svg("circle", { cx: x, cy: y, r: 30, fill: region.color }),
    svg("text", { x, y: y + 11, "text-anchor": "middle", class: "marker-emoji" }, region.emoji),
    svg("text", { x, y: y + 50, "text-anchor": "middle", class: "marker-label" }, region.name[L].split(/ [&y] | del /)[0])
  );
  return link;
}

function renderMap() {
  const s = svg("svg", { viewBox: "0 0 600 600", class: "cr-map", role: "group", "aria-label": t("mapLabel") });
  s.append(
    svg("rect", { x: 0, y: 0, width: 600, height: 600, rx: 24, class: "map-sea" }),
    svg("text", { x: 200, y: 405, "text-anchor": "middle", class: "sea-label" }, t("pacific")),
    svg("text", { x: 470, y: 90, class: "sea-label" }, t("caribbeanSea")),
    svg("polygon", { points: OUTLINE.map(([la, lo]) => project(la, lo).join(",")).join(" "), class: "map-land" })
  );
  for (const r of window.REGIONS) {
    if (r.lat == null) continue;
    const [x, y] = project(r.lat, r.lon);
    s.append(marker(r, x, y));
  }
  // Cocos Island is far away, so it gets its own little box; the ocean marker (if that region exists) sits in the Pacific
  s.append(
    svg("rect", { x: 10, y: 432, width: 150, height: 150, rx: 14, class: "inset" }),
    svg("text", { x: 85, y: 568, "text-anchor": "middle", class: "inset-label" }, t("cocosDistance"))
  );
  if (regionById("cocos")) s.append(marker(regionById("cocos"), 85, 475));
  if (regionById("ocean")) s.append(marker(regionById("ocean"), 250, 470));
  return s;
}

function renderGeography() {
  const box = document.getElementById("geography");
  box.replaceChildren();
  const L = currentLang;

  const list = el("div", { class: "region-list" });
  for (const r of window.REGIONS) {
    list.append(el("a", { href: `#/geography/${r.id}`, class: "region-btn", style: `--rc:${r.color}` },
      el("span", { class: "region-emoji", "aria-hidden": "true" }, r.emoji),
      el("span", { class: "region-text" },
        el("strong", {}, r.name[L]),
        el("em", {}, fill(t("regionCount"), { n: animalsIn(r.id).length })))
    ));
  }

  box.append(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "🗺️ " + t("geoTitle")),
    el("p", { class: "note geo-intro" }, t("geoIntro")),
    el("div", { class: "map-wrap" }, renderMap()),
    el("p", { class: "map-note" }, t("mapNote")),
    list
  );
}

function renderRegion(id) {
  const box = document.getElementById("geography");
  box.replaceChildren();
  const r = regionById(id);
  if (id !== lastRegion) { regionGroupFilter = "all"; lastRegion = id; }
  const back = el("a", { href: "#/geography", class: "back" }, t("backToMap"));
  if (!r) { box.append(back, el("p", { class: "note" }, t("notFound"))); return; }
  const L = currentLang;
  const all = animalsIn(r.id);
  const shown = all
    .filter(a => regionGroupFilter === "all" || a.group === regionGroupFilter)
    .sort((a, b) => a.name[L].localeCompare(b.name[L], L));

  const results = el("div", { class: "results" });
  shown.forEach(a => results.append(animalButton(a)));

  box.append(
    back,
    el("div", { class: "region-hero", style: `--rc:${r.color}` },
      el("span", { class: "region-hero-emoji", "aria-hidden": "true" }, r.emoji),
      el("h2", {}, r.name[L]),
      el("p", {}, r.desc[L])
    ),
    // Group buttons, counting only the animals of this region
    groupChips(regionGroupFilter, g => { regionGroupFilter = g; renderRegion(id); }, a => regionsOf(a).includes(r.id)),
    el("p", { class: "results-count" }, fill(t("resultsCount"), { n: shown.length })),
    results
  );
}

// Little region buttons for an animal's page ("Where to find it")
function regionLinks(animal) {
  const ids = regionsOf(animal);
  if (!ids.length) return "";
  return el("div", { class: "region-links" },
    ids.map(id => {
      const r = regionById(id);
      return el("a", { href: `#/geography/${id}`, class: "region-link", style: `--rc:${r.color}` },
        r.emoji + " " + r.name[currentLang]);
    })
  );
}
