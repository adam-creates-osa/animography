// Animography photo robot.
// Finds a real photo for each animal on iNaturalist, accepting ONLY these licenses:
//   CC0 (no rights reserved)  or  CC BY (credit the photographer).
// Costa Rica photos are preferred. Each photo's photographer, license and link are saved.
// Runs on GitHub (see .github/workflows/find-photos.yml). No secret key needed.
//
// Run by hand:  node scripts/find-photos.mjs            (fills animals without a card-safe photo)
//               node scripts/find-photos.mjs --all      (looks again for every animal, except locked ones)
//               node scripts/find-photos.mjs --dry-run  (shows what it would do, saves nothing)
//
// To keep a photo you chose yourself, add  "photoLocked": true  to that animal in data/animals.js.

import { readFile, writeFile } from "node:fs/promises";

const FILE = new URL("../data/animals.js", import.meta.url);
const API = "https://api.inaturalist.org/v1";
const COSTA_RICA = 6924;            // iNaturalist's place id for Costa Rica
const OK_LICENSES = ["cc0", "cc-by"]; // nothing else is accepted
const ALL = process.argv.includes("--all");
const DRY_RUN = process.argv.includes("--dry-run");

const sleep = ms => new Promise(r => setTimeout(r, ms));

// iNaturalist asks for about 1 request per second and a clear name for the app
async function inat(path) {
  await sleep(1100);
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(API + path, {
      headers: { Accept: "application/json", "User-Agent": "Animography/1.0 (educational site about Costa Rica's wildlife)" }
    });
    if (res.status === 429 || res.status >= 500) { await sleep(5000 * attempt); continue; } // busy: wait and retry
    if (!res.ok) throw new Error(`iNaturalist answered ${res.status}`);
    return res.json();
  }
  throw new Error("iNaturalist was busy; try again later");
}

// Find the iNaturalist species that matches our scientific name (also works for old names)
async function findTaxon(scientific) {
  const data = await inat(`/taxa?q=${encodeURIComponent(scientific)}&per_page=10`);
  const want = scientific.toLowerCase();
  return (data.results || []).find(t =>
    t.name?.toLowerCase() === want || t.matched_term?.toLowerCase() === want) || null;
}

// Look through observations for the first photo with an accepted license
async function findPhoto(taxonId, placeId) {
  const place = placeId ? `&place_id=${placeId}` : "";
  const data = await inat(`/observations?taxon_id=${taxonId}${place}&photo_license=${OK_LICENSES.join(",")}` +
    `&quality_grade=research&photos=true&order_by=votes&per_page=20`);
  for (const obs of data.results || []) {
    for (const p of obs.photos || []) {
      const lic = (p.license_code || "").toLowerCase();
      if (!OK_LICENSES.includes(lic) || !p.url) continue; // double-check the license ourselves
      return {
        url: p.url.replace(/square\.(jpe?g|png)/i, "medium.$1"),   // ~500 px wide
        large: p.url.replace(/square\.(jpe?g|png)/i, "large.$1"),  // ~1024 px wide
        author: cleanName(p.attribution, obs.user),
        license: lic === "cc0" ? "CC0" : "CC BY",
        page: `https://www.inaturalist.org/photos/${p.id}`,
        source: "iNaturalist",
        cardOk: true,
        inCostaRica: Boolean(placeId)
      };
    }
  }
  return null;
}

// "(c) Ana Pérez, some rights reserved (CC BY)" -> "Ana Pérez"
function cleanName(attribution = "", user) {
  const m = attribution.match(/^\(c\)\s*(.+?),\s*(some|no) rights reserved/i);
  return (m && m[1]) || user?.name || user?.login || "iNaturalist user";
}

// --- Read the animal list (plain JSON after "window.ANIMALS = ")
const src = await readFile(FILE, "utf8");
const marker = "window.ANIMALS = ";
const start = src.indexOf(marker) + marker.length;
const animals = JSON.parse(src.slice(start).trim().replace(/;$/, ""));

let found = 0, kept = 0, missing = [];
for (const a of animals) {
  const hasGood = a.photo && a.photo.cardOk;
  if (a.photoLocked || (hasGood && !ALL)) { kept++; continue; }
  try {
    const taxon = await findTaxon(a.scientific);
    if (!taxon) { console.log(`?  ${a.scientific}: not found on iNaturalist`); missing.push(a.scientific); continue; }
    const photo = (await findPhoto(taxon.id, COSTA_RICA)) || (await findPhoto(taxon.id, null));
    if (!photo) { console.log(`–  ${a.scientific}: no CC0 / CC BY photo yet`); missing.push(a.scientific); continue; }
    a.photo = photo;
    found++;
    console.log(`📷 ${a.scientific}: ${photo.license} by ${photo.author}${photo.inCostaRica ? " (Costa Rica)" : ""}`);
  } catch (err) {
    console.log(`!  ${a.scientific}: ${err.message}`);
    missing.push(a.scientific);
  }
}

console.log(`\nNew photos: ${found}. Kept existing: ${kept}. Still without a photo: ${missing.length}.`);
if (missing.length) console.log("Without photo:", missing.join(", "));
if (DRY_RUN) console.log("Dry run: nothing saved.");
else if (found > 0) {
  await writeFile(FILE, src.slice(0, start) + JSON.stringify(animals, null, 2) + ";\n");
  console.log("Saved data/animals.js");
}
