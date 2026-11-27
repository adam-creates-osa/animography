// Animography photo robot.
// Finds a real photo for each animal, accepting ONLY these licenses:
//   Public domain, CC0 (no rights reserved)  or  CC BY (credit the photographer).
//   (NOT accepted: CC BY-SA, CC BY-NC, CC BY-ND, "all rights reserved".)
// Where it looks, in this order (it stops at the first good photo):
//   1. iNaturalist observations in Costa Rica (research grade)
//   2. iNaturalist observations anywhere (research grade)
//   3. iNaturalist observations anywhere (any grade: still identified by people, just fewer votes)
//   4. iNaturalist's own species photos
//   5. Wikimedia Commons (great for old and extinct animals)
//   6. GBIF (photos shared by museums and scientists)
// Each photo's photographer, license and link are saved. No secret key needed.
//
// Run by hand:  node scripts/find-photos.mjs            (fills animals without a card-safe photo)
//               node scripts/find-photos.mjs --all      (looks again for every animal, except locked ones)
//               node scripts/find-photos.mjs --dry-run  (shows what it would do, saves nothing)
//
// To keep a photo you chose yourself, add  "photoLocked": true  to that animal in data/animals.js.

import { readFile, writeFile } from "node:fs/promises";

const FILE = new URL("../data/animals.js", import.meta.url);
const INAT = "https://api.inaturalist.org/v1";
const COMMONS = "https://commons.wikimedia.org/w/api.php";
const GBIF = "https://api.gbif.org/v1";
const COSTA_RICA = 6924;               // iNaturalist's place id for Costa Rica
const OK_INAT = ["cc0", "cc-by"];      // nothing else is accepted
const ALL = process.argv.includes("--all");
const DRY_RUN = process.argv.includes("--dry-run");
const AGENT = "Animography/1.1 (educational site about Costa Rica's wildlife; github.com/adam-creates-osa/animography)";

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Polite fetch: about 1 request per second, retries when the site is busy
async function getJSON(url) {
  await sleep(1100);
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(url, { headers: { Accept: "application/json", "User-Agent": AGENT } });
    if (res.status === 429 || res.status >= 500) { await sleep(5000 * attempt); continue; }
    if (!res.ok) throw new Error(`${new URL(url).host} answered ${res.status}`);
    return res.json();
  }
  throw new Error(`${new URL(url).host} was busy; try again later`);
}

// ---------- iNaturalist ----------
async function findTaxon(scientific) {
  const data = await getJSON(`${INAT}/taxa?q=${encodeURIComponent(scientific)}&per_page=10`);
  const want = scientific.toLowerCase();
  return (data.results || []).find(t =>
    t.name?.toLowerCase() === want || t.matched_term?.toLowerCase() === want) || null;
}

function inatPhoto(p, user, extra = {}) {
  const lic = (p.license_code || "").toLowerCase();
  if (!OK_INAT.includes(lic) || !p.url) return null; // double-check the license ourselves
  return {
    url: p.url.replace(/(square|small|thumb)\.(jpe?g|png)/i, "medium.$2"),   // ~500 px wide
    large: p.url.replace(/(square|small|thumb)\.(jpe?g|png)/i, "large.$2"),  // ~1024 px wide
    author: cleanName(p.attribution, user),
    license: lic === "cc0" ? "CC0" : "CC BY",
    page: `https://www.inaturalist.org/photos/${p.id}`,
    source: "iNaturalist",
    cardOk: true,
    ...extra
  };
}

async function inatObservations(taxonId, { placeId = null, research = true } = {}) {
  const place = placeId ? `&place_id=${placeId}` : "";
  const grade = research ? "&quality_grade=research" : "&quality_grade=research,needs_id";
  const data = await getJSON(`${INAT}/observations?taxon_id=${taxonId}${place}&photo_license=${OK_INAT.join(",")}` +
    `${grade}&photos=true&order_by=votes&per_page=30`);
  for (const obs of data.results || []) {
    for (const p of obs.photos || []) {
      const photo = inatPhoto(p, obs.user, { inCostaRica: Boolean(placeId) });
      if (photo) return photo;
    }
  }
  return null;
}

async function inatTaxonPhotos(taxonId) {
  const data = await getJSON(`${INAT}/taxa/${taxonId}`);
  const taxon = (data.results || [])[0];
  for (const tp of taxon?.taxon_photos || []) {
    const photo = tp.photo && inatPhoto(tp.photo, null);
    if (photo) return photo;
  }
  return null;
}

// "(c) Ana Pérez, some rights reserved (CC BY)" -> "Ana Pérez"
function cleanName(attribution = "", user) {
  const m = attribution.match(/^\(c\)\s*(.+?),\s*(some|no) rights reserved/i);
  return (m && m[1]) || user?.name || user?.login || "iNaturalist user";
}

// ---------- Wikimedia Commons ----------
const stripHtml = s => (s || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const NOT_A_PHOTO = /\b(map|range|distribution|skull|skeleton|bones?|stamp|coin|logo|diagram|chart|sound|call)\b/i;

function commonsLicense(meta) {
  const name = stripHtml(meta.LicenseShortName?.value).toLowerCase();
  if (/\b(sa|nc|nd)\b|share ?alike|non-?commercial|no ?deriv/.test(name)) return null;
  if (/^cc0|cc zero/.test(name)) return "CC0";
  if (/public domain|^pd\b|^pd-/.test(name)) return "Public domain";
  if (/^cc by \d/.test(name) || name === "cc by") return "CC BY";
  return null;
}

async function commonsPhoto(names) {
  for (const name of names) {
    const url = `${COMMONS}?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=20` +
      `&gsrsearch=${encodeURIComponent(`"${name}"`)}&prop=imageinfo&iiprop=url|mime|extmetadata&iiurlwidth=500`;
    const data = await getJSON(url);
    const pages = Object.values(data.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
    for (const page of pages) {
      const info = page.imageinfo?.[0];
      if (!info || !/^image\/(jpeg|png)$/.test(info.mime)) continue;
      const meta = info.extmetadata || {};
      const title = page.title.replace(/^File:/, "");
      const text = `${title} ${stripHtml(meta.ImageDescription?.value)} ${stripHtml(meta.ObjectName?.value)}`.toLowerCase();
      if (!text.includes(name.toLowerCase())) continue;     // must really be this species
      if (NOT_A_PHOTO.test(title)) continue;
      const license = commonsLicense(meta);
      if (!license) continue;
      const file = encodeURIComponent(title.replace(/ /g, "_"));
      return {
        url: `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=500`,
        large: `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=1024`,
        author: stripHtml(meta.Artist?.value).slice(0, 80) || "Wikimedia Commons",
        license,
        page: info.descriptionurl,
        source: "Wikimedia Commons",
        cardOk: true
      };
    }
  }
  return null;
}

// ---------- GBIF ----------
async function gbifPhoto(names) {
  for (const name of names) {
    for (const basis of ["HUMAN_OBSERVATION", ""]) {
      const url = `${GBIF}/occurrence/search?scientificName=${encodeURIComponent(name)}&mediaType=StillImage` +
        `&license=CC0_1_0&license=CC_BY_4_0${basis ? `&basisOfRecord=${basis}` : ""}&limit=20`;
      const data = await getJSON(url);
      for (const occ of data.results || []) {
        for (const m of occ.media || []) {
          const lic = (m.license || occ.license || "").toLowerCase();
          const license = lic.includes("publicdomain/zero") || lic.includes("cc0") ? "CC0"
            : /licenses\/by\/\d/.test(lic) || lic === "cc_by_4_0" ? "CC BY" : null;
          if (!license || !m.identifier || !/^https:/.test(m.identifier)) continue;
          if (m.format && !/image\/(jpe?g|png)/i.test(m.format)) continue;
          return {
            url: m.identifier, large: m.identifier,
            author: (m.creator || m.rightsHolder || occ.recordedBy || occ.institutionCode || "GBIF").slice(0, 80),
            license,
            page: `https://www.gbif.org/occurrence/${occ.key}`,
            source: "GBIF",
            cardOk: true
          };
        }
      }
    }
  }
  return null;
}

// ---------- Main ----------
const src = await readFile(FILE, "utf8");
const marker = "window.ANIMALS = ";
const start = src.indexOf(marker) + marker.length;
const animals = JSON.parse(src.slice(start).trim().replace(/;$/, ""));

let found = 0, kept = 0, missing = [];
const bySource = {};
for (const a of animals) {
  const hasGood = a.photo && a.photo.cardOk;
  if (a.photoLocked || (hasGood && !ALL)) { kept++; continue; }
  let photo = null;
  const names = [a.scientific];
  try {
    const taxon = await findTaxon(a.scientific);
    if (taxon && taxon.name && taxon.name.toLowerCase() !== a.scientific.toLowerCase()) names.push(taxon.name);
    if (taxon) {
      photo = (await inatObservations(taxon.id, { placeId: COSTA_RICA }))
           || (await inatObservations(taxon.id))
           || (await inatObservations(taxon.id, { research: false }))
           || (await inatTaxonPhotos(taxon.id));
    }
  } catch (err) { console.log(`!  ${a.scientific} (iNaturalist): ${err.message}`); }
  try { if (!photo) photo = await commonsPhoto(names); }
  catch (err) { console.log(`!  ${a.scientific} (Commons): ${err.message}`); }
  try { if (!photo) photo = await gbifPhoto(names); }
  catch (err) { console.log(`!  ${a.scientific} (GBIF): ${err.message}`); }

  if (!photo) { console.log(`–  ${a.scientific}: no Public domain / CC0 / CC BY photo found anywhere yet`); missing.push(`${a.name.en} (${a.scientific})`); continue; }
  a.photo = photo;
  found++;
  bySource[photo.source] = (bySource[photo.source] || 0) + 1;
  console.log(`📷 ${a.scientific}: ${photo.license} by ${photo.author} · ${photo.source}${photo.inCostaRica ? " (Costa Rica)" : ""}`);
}

console.log(`\nNew photos: ${found} ${JSON.stringify(bySource)}. Kept existing: ${kept}. Still without a photo: ${missing.length}.`);
if (missing.length) console.log("Without photo:\n  " + missing.join("\n  "));
if (DRY_RUN) console.log("Dry run: nothing saved.");
else if (found > 0) {
  await writeFile(FILE, src.slice(0, start) + JSON.stringify(animals, null, 2) + ";\n");
  console.log("Saved data/animals.js");
}
