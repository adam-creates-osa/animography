// Animography: weekly IUCN Red List status updater.
// Runs on GitHub (see .github/workflows/update-status.yml), NOT in the visitor's browser,
// so the secret token is never part of the website.
//
// Run by hand:   IUCN_TOKEN=your-token node scripts/update-status.mjs
// Test safely:   IUCN_TOKEN=x node scripts/update-status.mjs --dry-run   (shows changes, saves nothing)

import { readFile, writeFile } from "node:fs/promises";

const FILE = new URL("../data/animals.js", import.meta.url);
const API = "https://api.iucnredlist.org/api/v4";
const TOKEN = process.env.IUCN_TOKEN;
const DRY_RUN = process.argv.includes("--dry-run");
const VALID = ["EX", "EW", "CR", "EN", "VU", "NT", "LC", "DD"];
// Very old assessments use older codes; translate them
const OLD_CODES = { "LR/nt": "NT", "LR/lc": "LC", "LR/cd": "NT" };

if (!TOKEN) {
  console.error("No IUCN_TOKEN found. Add it as a GitHub secret named IUCN_TOKEN (see README).");
  process.exit(1);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
let authStyle = null; // the IUCN docs we found disagree on the header format, so we try both

async function iucnGet(path) {
  const styles = authStyle ? [authStyle] : ["Bearer", "plain"];
  for (const style of styles) {
    const res = await fetch(API + path, {
      headers: {
        Accept: "application/json",
        Authorization: style === "Bearer" ? `Bearer ${TOKEN}` : TOKEN
      }
    });
    if (res.status === 401 || res.status === 403) continue; // try the other style
    authStyle = style;
    if (res.status === 404) return null; // species not found
    if (!res.ok) throw new Error(`IUCN answered ${res.status} for ${path}`);
    return res.json();
  }
  throw new Error("The IUCN token was not accepted. Check that the IUCN_TOKEN secret is correct.");
}

// Find the newest GLOBAL assessment's category in the API answer
function latestGlobalCategory(data) {
  const list = data?.assessments || [];
  const isGlobal = a => (a.scopes || []).some(s => String(s.code) === "1" ||
    /global/i.test(s.description?.en || s.description || ""));
  const pick =
    list.find(a => a.latest && isGlobal(a)) ||
    list.find(a => a.latest) ||
    [...list].sort((a, b) => (b.year_published || 0) - (a.year_published || 0))[0];
  if (!pick) return null;
  let code = pick.red_list_category_code || pick.red_list_category?.code || pick.category;
  code = OLD_CODES[code] || code;
  return VALID.includes(code) ? { code, year: pick.year_published } : null;
}

// --- Read the animal list (it's plain JSON after "window.ANIMALS = ")
const src = await readFile(FILE, "utf8");
const marker = "window.ANIMALS = ";
const start = src.indexOf(marker) + marker.length;
const animals = JSON.parse(src.slice(start).trim().replace(/;$/, ""));
const today = new Date().toISOString().slice(0, 10);

let changed = 0, checked = 0, problems = 0;
for (const a of animals) {
  const [genus, species] = a.scientific.split(" ");
  try {
    const data = await iucnGet(`/taxa/scientific_name?genus_name=${encodeURIComponent(genus)}&species_name=${encodeURIComponent(species)}`);
    const found = data && latestGlobalCategory(data);
    if (!found) {
      console.log(`?  ${a.scientific}: not found on the Red List (left as ${a.status}).`);
      problems++;
    } else {
      checked++;
      if (found.code !== a.status) {
        console.log(`✎  ${a.scientific}: ${a.status} → ${found.code} (assessed ${found.year ?? "?"})`);
        a.status = found.code;
        changed++;
      } else {
        console.log(`✓  ${a.scientific}: still ${a.status}`);
      }
      a.checked = today;
      a.statusVerified = true; // confirmed by IUCN, so trivia can ask about it
    }
  } catch (err) {
    console.log(`!  ${a.scientific}: ${err.message}`);
    problems++;
    if (/token/i.test(err.message)) process.exit(1);
  }
  await sleep(1000); // be polite to the IUCN servers
}

console.log(`\nChecked ${checked}, changed ${changed}, problems ${problems}.`);
if (DRY_RUN) {
  console.log("Dry run: nothing saved.");
} else if (checked > 0) {
  await writeFile(FILE, src.slice(0, start) + JSON.stringify(animals, null, 2) + ";\n");
  console.log("Saved data/animals.js");
}
