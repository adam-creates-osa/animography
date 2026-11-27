// ===== Collectible cards & blind boxes =====
// Uses: window.ANIMALS, window.GAME_RULES, Store, el(), t(), fill(), currentLang

const RARITIES = ["common", "rare", "special", "secretRare"];
let reveal = null; // the card just opened: { animal, duplicate }
let cardsFilter = "all";

function rarityOf(animal) {
  const map = window.GAME_RULES.rarityByStatus;
  return RARITIES.find(r => map[r].includes(animal.status)) || "common";
}

function cardNumber(animal) {
  const n = window.ANIMALS.indexOf(animal) + 1;
  return `#${String(n).padStart(3, "0")}/${window.ANIMALS.length}`;
}

// Photo link at a chosen width (robot photos from iNaturalist, or a Wikimedia Commons file)
function photoUrl(photo, width) {
  if (photo.url) return width > 600 ? (photo.large || photo.url) : photo.url;
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(photo.file.replace(/ /g, "_"))}?width=${width}`;
}
function photoPage(photo) {
  return photo.page || `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(photo.file.replace(/ /g, "_"))}`;
}
// "Photo: Ana Pérez · CC BY · iNaturalist"
function photoCredit(photo) {
  return fill(t("photoBy"), { a: photo.author }) + [photo.license, photo.source].filter(Boolean).map(x => " · " + x).join("");
}

// A picture that falls back to the emoji if the photo can't load
function photoOrEmoji(animal, { width, allowPhoto, cls }) {
  const box = el("div", { class: `${cls} art-${animal.group}` });
  const emoji = el("span", { class: "art-emoji", "aria-hidden": "true" }, animal.emoji);
  box.append(emoji);
  if (allowPhoto && animal.photo) {
    const img = el("img", { src: photoUrl(animal.photo, width), alt: animal.name[currentLang], loading: "lazy", draggable: "false" });
    img.addEventListener("load", () => box.classList.add("has-photo"));
    img.addEventListener("error", () => img.remove());
    box.append(img);
  }
  // No free photo exists anywhere yet (the photo robot sets "photoWanted"): show a silhouette instead
  if (animal.photoWanted && !(allowPhoto && animal.photo)) {
    box.classList.add("photo-wanted");
    if (cls === "card-art") box.append(el("span", { class: "wanted-tag" }, t("photoWanted")));
  }
  return box;
}

// ----- The card itself (built from HTML, not a single image file) -----
function renderCard(animal) {
  const rarity = rarityOf(animal);
  const L = currentLang;
  const card = el("div", { class: `card card-${rarity}`, role: "img",
    "aria-label": `${animal.name[L]}, ${t("rarity")[rarity]}` });

  card.append(
    el("div", { class: "card-top" },
      el("span", { class: "card-rarity" }, t("rarityIcon")[rarity] + " " + t("rarity")[rarity]),
      el("span", { class: "card-num" }, cardNumber(animal))
    ),
    (() => {
      const art = photoOrEmoji(animal, { width: 500, allowPhoto: animal.photo && animal.photo.cardOk, cls: "card-art" });
      // CC BY photos must credit the photographer, so the card shows it
      if (animal.photo && animal.photo.cardOk && animal.photo.license !== "Public domain")
        art.append(el("span", { class: "card-credit" }, "📷 " + animal.photo.author + (animal.photo.license ? " · " + animal.photo.license : "")));
      return art;
    })(),
    el("div", { class: "card-body" },
      el("strong", { class: "card-name" }, animal.name[L]),
      el("em", { class: "card-sci" }, animal.scientific),
      el("span", { class: `status status-${animal.status}` }, t("status")[animal.status])
    ),
    el("div", { class: "card-foot" }, "© Animography · Costa Rica")
  );
  // Make casual copying a bit harder (no right-click "save image", no dragging)
  card.addEventListener("contextmenu", e => e.preventDefault());
  return card;
}

// ----- Picking a card -----
// Every card gets "tickets" by rarity (GAME_RULES.cardWeights); one ticket is drawn.
function cardTickets(animal) {
  return window.GAME_RULES.cardWeights[rarityOf(animal)] || 0;
}
function pickCard() {
  const total = window.ANIMALS.reduce((sum, a) => sum + cardTickets(a), 0);
  let roll = Math.random() * total;
  for (const a of window.ANIMALS) {
    roll -= cardTickets(a);
    if (roll < 0) return a;
  }
  return window.ANIMALS[window.ANIMALS.length - 1];
}

// Real chances, worked out from the tickets: per rarity group and per single card
function cardOdds() {
  const total = window.ANIMALS.reduce((sum, a) => sum + cardTickets(a), 0);
  const fmt = x => x >= 1 ? x.toFixed(1).replace(/\.0$/, "") : x.toFixed(2);
  const group = {}, each = {};
  for (const r of RARITIES) {
    const count = window.ANIMALS.filter(a => rarityOf(a) === r).length;
    const w = window.GAME_RULES.cardWeights[r] || 0;
    group[r] = fmt(100 * count * w / total);
    each[r] = fmt(100 * w / total);
  }
  return { group, each };
}

// ----- My Cards screen -----
function renderCardsScreen() {
  const box = document.getElementById("cards");
  box.replaceChildren();
  const R = window.GAME_RULES;
  const save = Store.load();
  const owned = Object.keys(save.cards).filter(id => save.cards[id] > 0);
  const canOpen = save.points >= R.blindBoxCost;

  // Blind box area
  const openBtn = el("button", { type: "button", class: "big-btn open-btn" },
    fill(t("openBox"), { c: R.blindBoxCost }));
  openBtn.disabled = !canOpen;
  openBtn.addEventListener("click", () => startOpening(openBtn));

  box.append(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "🃏 " + t("myCards")),
    el("div", { class: "shop" },
      el("div", { class: "blind-box", id: "blind-box", "aria-hidden": "true" },
        el("span", { class: "box-lid" }), el("span", { class: "box-q" }, "?")),
      el("div", { class: "shop-info" },
        el("p", { class: "shop-points" }, "⭐ " + save.points + " " + t("yourPoints")),
        openBtn,
        canOpen ? "" : el("p", { class: "note" },
          fill(t("needPoints"), { n: R.blindBoxCost - save.points }), " ",
          el("a", { href: "#/trivia", class: "learn-link" }, t("playTrivia"))),
        el("p", { class: "odds" }, fill(t("oddsLine"), cardOdds().group)),
        el("p", { class: "odds odds-each" }, fill(t("oddsEach"), cardOdds().each))
      )
    ),
    el("div", { id: "reveal" }),
    el("h3", { class: "collection-title" },
      fill(t("collectionCount"), { n: owned.length, total: window.ANIMALS.length }))
  );

  if (reveal) showReveal();

  // Group filter + collection grid (owned cards + locked slots)
  box.append(groupChips(cardsFilter, g => { cardsFilter = g; renderCardsScreen(); }, a => (save.cards[a.id] || 0) > 0));
  const grid = el("div", { class: "collection" });
  window.ANIMALS.filter(a => cardsFilter === "all" || a.group === cardsFilter).forEach(a => {
    const count = save.cards[a.id] || 0;
    if (count) {
      const slot = el("button", { type: "button", class: "slot owned",
        "aria-label": `${a.name[currentLang]}: ${t("openCard")}` }, renderCard(a));
      slot.addEventListener("click", () => openCardPopup(a, count));
      if (count > 1) slot.append(el("span", { class: "dupes" }, "×" + count));
      grid.append(slot);
    } else {
      const secret = rarityOf(a) === "secretRare";
      grid.append(el("div", { class: `slot locked locked-${rarityOf(a)}` },
        el("span", { class: "lock-q" }, secret ? "✨" : "?"),
        el("span", { class: "lock-num" }, cardNumber(a)),
        el("span", { class: "lock-name" }, secret ? t("secretName") : t("rarity")[rarityOf(a)])
      ));
    }
  });
  box.append(grid);
}

function startOpening(btn) {
  const R = window.GAME_RULES;
  const animal = pickCard();
  const result = Store.openBox(R.blindBoxCost, animal.id, R.duplicateRefund);
  if (!result) { renderCardsScreen(); return; }
  updateCounters();
  btn.disabled = true;
  const boxEl = document.getElementById("blind-box");
  boxEl.classList.add("shaking");
  // Little suspense, then show the card
  setTimeout(() => {
    reveal = { animal, duplicate: result.duplicate };
    renderCardsScreen();
    document.getElementById("reveal").scrollIntoView({ behavior: "smooth", block: "center" });
  }, 1200);
}

function showReveal() {
  const { animal, duplicate } = reveal;
  const rarity = rarityOf(animal);
  const R = window.GAME_RULES;
  const close = el("button", { type: "button", class: "big-btn small" }, t("collect"));
  close.addEventListener("click", () => { reveal = null; renderCardsScreen(); });

  document.getElementById("reveal").append(
    el("div", { class: `reveal reveal-${rarity}`, role: "status" },
      el("p", { class: "reveal-title" },
        rarity === "secretRare" ? t("gotSecret") : rarity === "special" ? t("gotSpecial") :
        rarity === "rare" ? t("gotRare") : t("gotCard")),
      el("div", { class: "reveal-card" }, renderCard(animal)),
      duplicate ? el("p", { class: "note" }, fill(t("duplicate"), { r: R.duplicateRefund })) : "",
      el("p", {}, el("a", { href: `#/animal/${animal.id}`, class: "learn-link" },
        fill(t("meetAnimal"), { name: animal.name[currentLang] }))),
      close
    )
  );
}

// ----- Pop-up of one card (from My Cards) -----
function openCardPopup(animal, count) {
  const dlg = document.getElementById("card-popup");
  dlg.classList.remove("chatting");
  const close = el("button", { type: "button", class: "popup-close", "aria-label": t("close") }, "✕");
  close.addEventListener("click", () => dlg.close());
  const talk = el("button", { type: "button", class: "big-btn small popup-talk" }, t("talkBtn"));
  talk.addEventListener("click", () => openAnimalChat(animal, count));
  const link = el("a", { href: `#/animal/${animal.id}`, class: "big-btn small popup-link" },
    fill(t("meetAnimal"), { name: animal.name[currentLang] }));
  link.addEventListener("click", () => dlg.close());
  dlg.replaceChildren(
    close,
    el("div", { class: "popup-card" }, renderCard(animal)),
    count > 1 ? el("p", { class: "popup-copies" }, fill(t("copies"), { n: count })) : "",
    talk,
    link
  );
  if (!dlg.open) dlg.showModal();
  talk.focus();
}

// ----- Chat with the animal (same pop-up, chat view) -----
function openAnimalChat(animal, count) {
  const dlg = document.getElementById("card-popup");
  const close = el("button", { type: "button", class: "popup-close", "aria-label": t("close") }, "✕");
  close.addEventListener("click", () => dlg.close());
  dlg.classList.add("chatting");
  dlg.replaceChildren(close, AnimalChat.renderChat(animal, { onBack: () => openCardPopup(animal, count) }));
}

// Clicking the dark area around the pop-up closes it (Esc also works)
document.getElementById("card-popup").addEventListener("click", e => {
  const dlg = e.currentTarget;
  if (e.target !== dlg) return;
  const r = dlg.getBoundingClientRect();
  const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
  if (!inside) dlg.close();
});
