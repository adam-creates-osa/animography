// ===== Binders: arrange your cards in as many binders as you like =====
// Cards stay in your collection; a binder only remembers which cards go where.
// A card can appear in binders as many times as you own copies of it (counting all binders together).
// Everything is saved in this browser (Store), so the order stays after closing the site.

let binderPickFilter = "all";   // group filter in the "Add cards" panel
let binderDeleteAsk = null;     // binder id waiting for "Are you sure?"

const Binders = {
  all() { return Store.load().binders || []; },
  get(id) { return this.all().find(b => b.id === id) || null; },
  saveAll(list) { const d = Store.load(); d.binders = list; Store.save(d); },
  create(name) {
    const list = this.all();
    const b = { id: "b" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
                name: name.trim().slice(0, 40) || fill(t("binderDefault"), { n: list.length + 1 }),
                cards: [], created: new Date().toISOString() };
    list.push(b); this.saveAll(list); return b;
  },
  update(id, change) {
    const list = this.all().map(b => b.id === id ? { ...b, ...change } : b);
    this.saveAll(list);
  },
  remove(id) { this.saveAll(this.all().filter(b => b.id !== id)); },
  // How many copies of a card are already placed in all binders
  used(animalId) { return this.all().reduce((n, b) => n + b.cards.filter(c => c === animalId).length, 0); },
  owned(animalId) { return Store.load().cards[animalId] || 0; },
  available(animalId) { return this.owned(animalId) - this.used(animalId); },
  // Put a card into a binder at a position (end if no position). Returns false if no copies are left.
  insert(id, animalId, index) {
    if (this.available(animalId) <= 0) return false;
    const b = this.get(id); if (!b) return false;
    const cards = [...b.cards];
    cards.splice(index == null ? cards.length : index, 0, animalId);
    this.update(id, { cards }); return true;
  },
  move(id, from, to) {
    const b = this.get(id); if (!b) return;
    const cards = [...b.cards];
    const [card] = cards.splice(from, 1);
    cards.splice(Math.max(0, Math.min(to, cards.length)), 0, card);
    this.update(id, { cards });
  },
  removeAt(id, index) {
    const b = this.get(id); if (!b) return;
    const cards = [...b.cards]; cards.splice(index, 1);
    this.update(id, { cards });
  }
};

// Tabs at the top of the card screens
function cardTabs(active) {
  const tabs = [["cards", "#/cards", "🃏 " + t("tabCollection")], ["binders", "#/binders", "📒 " + t("tabBinders")]];
  return el("nav", { class: "card-tabs", "aria-label": t("myCards") },
    ...tabs.map(([key, href, label]) => el("a", { href, class: "card-tab", "aria-current": key === active ? "page" : "false" }, label)));
}

// A small picture of a card (used for binder covers)
function miniArt(animal) {
  return photoOrEmoji(animal, { width: 300, allowPhoto: animal.photo && animal.photo.cardOk, cls: "mini-art" });
}

// ----- List of binders -----
function renderBinders() {
  const box = document.getElementById("binders");
  const list = Binders.all();
  const input = el("input", { type: "text", class: "binder-name-input", maxlength: "40",
    placeholder: fill(t("binderDefault"), { n: list.length + 1 }), "aria-label": t("binderNameLabel") });
  const form = el("form", { class: "binder-new" }, input,
    el("button", { type: "submit", class: "big-btn small" }, "＋ " + t("binderCreate")));
  form.addEventListener("submit", e => {
    e.preventDefault();
    const b = Binders.create(input.value);
    location.hash = `#/binder/${b.id}`;
  });

  const owned = Object.values(Store.load().cards).filter(n => n > 0).length;
  const grid = el("div", { class: "binder-shelf" });
  for (const b of list) {
    const cover = b.cards.length ? miniArt(window.ANIMALS.find(a => a.id === b.cards[0]) || window.ANIMALS[0])
                                 : el("div", { class: "mini-art empty-cover" }, "📒");
    grid.append(el("a", { href: `#/binder/${b.id}`, class: "binder-tile" },
      cover,
      el("strong", { class: "binder-tile-name" }, b.name),
      el("span", { class: "binder-tile-count" }, fill(t(b.cards.length === 1 ? "binderOneCard" : "binderCards"), { n: b.cards.length }))));
  }

  box.replaceChildren(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "📒 " + t("myBinders")),
    cardTabs("binders"),
    el("p", { class: "note" }, t("bindersIntro")),
    owned ? form : el("p", { class: "note" }, t("bindersNoCards"), " ", el("a", { href: "#/cards", class: "learn-link" }, t("openBoxLink"))),
    list.length ? grid : el("p", { class: "empty-binders" }, t("bindersEmpty"))
  );
}

// ----- One binder -----
function renderBinder(id) {
  const box = document.getElementById("binders");
  const b = Binders.get(id);
  if (!b) { box.replaceChildren(el("a", { href: "#/binders", class: "back" }, t("backBinders")), el("p", {}, t("binderMissing"))); return; }
  const find = aid => window.ANIMALS.find(a => a.id === aid);

  // Title, rename and delete
  const title = el("h2", { class: "screen-title binder-title" }, "📒 " + b.name);
  const renameBtn = el("button", { type: "button", class: "chip" }, "✏️ " + t("binderRename"));
  const deleteBtn = el("button", { type: "button", class: "chip chip-danger" }, "🗑️ " + t("binderDelete"));
  const tools = el("div", { class: "binder-tools" }, renameBtn, deleteBtn);
  renameBtn.addEventListener("click", () => {
    const input = el("input", { type: "text", class: "binder-name-input", maxlength: "40", value: b.name, "aria-label": t("binderNameLabel") });
    const form = el("form", { class: "binder-new" }, input, el("button", { type: "submit", class: "big-btn small" }, t("binderSave")));
    form.addEventListener("submit", e => { e.preventDefault(); if (input.value.trim()) Binders.update(id, { name: input.value.trim().slice(0, 40) }); renderBinder(id); });
    tools.replaceWith(form); input.focus(); input.select();
  });
  deleteBtn.addEventListener("click", () => { binderDeleteAsk = id; renderBinder(id); });
  let confirmBox = "";
  if (binderDeleteAsk === id) {
    const yes = el("button", { type: "button", class: "chip chip-danger" }, t("binderDeleteYes"));
    const no = el("button", { type: "button", class: "chip" }, t("binderDeleteNo"));
    yes.addEventListener("click", () => { binderDeleteAsk = null; Binders.remove(id); location.hash = "#/binders"; });
    no.addEventListener("click", () => { binderDeleteAsk = null; renderBinder(id); });
    confirmBox = el("div", { class: "binder-confirm", role: "alert" }, el("p", {}, fill(t("binderDeleteAsk"), { name: b.name })), yes, no);
  }

  // The binder's cards, in order
  const grid = el("div", { class: "binder-grid", "aria-label": b.name });
  b.cards.forEach((aid, i) => {
    const a = find(aid); if (!a) return;
    const left = el("button", { type: "button", class: "bc-btn", "aria-label": t("binderMoveLeft") }, "◀");
    const right = el("button", { type: "button", class: "bc-btn", "aria-label": t("binderMoveRight") }, "▶");
    const del = el("button", { type: "button", class: "bc-btn bc-del", "aria-label": t("binderRemove") }, "✕");
    left.disabled = i === 0; right.disabled = i === b.cards.length - 1;
    left.addEventListener("click", () => { Binders.move(id, i, i - 1); renderBinder(id); });
    right.addEventListener("click", () => { Binders.move(id, i, i + 1); renderBinder(id); });
    del.addEventListener("click", () => { Binders.removeAt(id, i); renderBinder(id); });
    const item = el("div", { class: "binder-item", "data-index": String(i) },
      el("div", { class: "binder-card" }, renderCard(a)),
      el("div", { class: "bc-controls" }, left, el("span", { class: "bc-pos" }, String(i + 1)), right, del));
    makeDraggable(item.querySelector(".binder-card"), item, { kind: "move", from: i, binderId: id });
    grid.append(item);
  });
  if (!b.cards.length) grid.append(el("div", { class: "binder-drop-hint" }, t("binderDropHint")));

  // "Add cards" panel: your collection, with how many copies are still free
  const save = Store.load();
  const ownedAnimals = window.ANIMALS.filter(a => (save.cards[a.id] || 0) > 0);
  const pick = el("div", { class: "binder-pick" });
  ownedAnimals.filter(a => binderPickFilter === "all" || a.group === binderPickFilter).forEach(a => {
    const free = Binders.available(a.id);
    const add = el("button", { type: "button", class: "pick-add", "aria-label": fill(t("binderAddCard"), { name: a.name[currentLang] }) }, "＋");
    add.disabled = free <= 0;
    add.addEventListener("click", () => { Binders.insert(id, a.id); renderBinder(id); });
    const item = el("div", { class: "pick-item" + (free <= 0 ? " used-up" : "") },
      el("div", { class: "binder-card" }, renderCard(a)),
      el("div", { class: "pick-row" }, el("span", { class: "pick-free" }, fill(t("binderFree"), { n: free, total: save.cards[a.id] })), add));
    if (free > 0) makeDraggable(item.querySelector(".binder-card"), item, { kind: "add", animalId: a.id, binderId: id });
    pick.append(item);
  });

  box.replaceChildren(
    el("a", { href: "#/binders", class: "back" }, t("backBinders")),
    title, tools, confirmBox,
    el("p", { class: "note" }, fill(t(b.cards.length === 1 ? "binderOneCard" : "binderCards"), { n: b.cards.length }), " · ", t("binderHowTo")),
    grid,
    el("h3", { class: "collection-title" }, "➕ " + t("binderAddTitle")),
    groupChips(binderPickFilter, g => { binderPickFilter = g; renderBinder(id); }, a => (save.cards[a.id] || 0) > 0),
    ownedAnimals.length ? pick : el("p", { class: "note" }, t("bindersNoCards"))
  );
}

// ----- Drag and drop (mouse, touch and pen) -----
// Mouse: press and move. Touch: press and hold for a moment, then move (so normal scrolling still works).
function makeDraggable(handle, item, info) {
  handle.classList.add("drag-handle");
  let startX = 0, startY = 0, timer = null, dragging = false, ghost = null, pointerId = null, scrollLoop = null, lastY = 0;

  const begin = (x, y) => {
    dragging = true;
    const r = handle.getBoundingClientRect();
    ghost = handle.cloneNode(true);
    ghost.classList.add("drag-ghost");
    Object.assign(ghost.style, { width: r.width + "px", left: (x - r.width / 2) + "px", top: (y - r.height / 2) + "px" });
    document.body.append(ghost);
    item.classList.add("dragging");
    document.body.classList.add("is-dragging");
    if (navigator.vibrate) try { navigator.vibrate(15); } catch (e) {}
    // Scroll the page when dragging near the top or bottom edge
    scrollLoop = setInterval(() => {
      if (lastY < 70) window.scrollBy(0, -12);
      else if (lastY > window.innerHeight - 70) window.scrollBy(0, 12);
    }, 16);
  };
  const target = (x, y) => {
    const under = document.elementFromPoint(x, y);
    const grid = under && under.closest(".binder-grid");
    if (!grid) return null;
    const over = under.closest(".binder-item");
    if (!over) return { index: grid.querySelectorAll(".binder-item").length, el: null };
    const r = over.getBoundingClientRect();
    const after = x > r.left + r.width / 2;
    return { index: Number(over.dataset.index) + (after ? 1 : 0), el: over, after };
  };
  const clearMarks = () => document.querySelectorAll(".drop-before, .drop-after, .grid-hover").forEach(n => n.classList.remove("drop-before", "drop-after", "grid-hover"));
  const move = (x, y) => {
    lastY = y;
    const w = ghost.offsetWidth, h = ghost.offsetHeight;
    ghost.style.left = (x - w / 2) + "px"; ghost.style.top = (y - h / 2) + "px";
    clearMarks();
    const tg = target(x, y);
    if (tg) {
      if (tg.el) tg.el.classList.add(tg.after ? "drop-after" : "drop-before");
      else document.querySelector(".binder-grid")?.classList.add("grid-hover");
    }
  };
  const end = (x, y, cancelled) => {
    clearTimeout(timer); timer = null;
    if (!dragging) return;
    dragging = false;
    clearInterval(scrollLoop);
    const tg = cancelled ? null : target(x, y);
    ghost.remove(); ghost = null;
    item.classList.remove("dragging");
    document.body.classList.remove("is-dragging");
    clearMarks();
    if (!tg) return;
    if (info.kind === "move") {
      const to = tg.index > info.from ? tg.index - 1 : tg.index;
      if (to !== info.from) Binders.move(info.binderId, info.from, to);
    } else {
      Binders.insert(info.binderId, info.animalId, tg.index);
    }
    renderBinder(info.binderId);
  };

  handle.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    pointerId = e.pointerId; startX = e.clientX; startY = e.clientY; lastY = e.clientY;
    if (e.pointerType !== "mouse") timer = setTimeout(() => { timer = null; begin(startX, startY); }, 350);
  });
  handle.addEventListener("pointermove", e => {
    if (e.pointerId !== pointerId) return;
    if (!dragging) {
      const far = Math.abs(e.clientX - startX) + Math.abs(e.clientY - startY) > 8;
      if (e.pointerType === "mouse" && far && e.buttons === 1) { handle.setPointerCapture(e.pointerId); begin(e.clientX, e.clientY); }
      else if (far && timer) { clearTimeout(timer); timer = null; } // it's a scroll, not a drag
      if (!dragging) return;
    }
    e.preventDefault();
    move(e.clientX, e.clientY);
  });
  handle.addEventListener("pointerup", e => { if (e.pointerId === pointerId) end(e.clientX, e.clientY, false); });
  handle.addEventListener("pointercancel", e => { if (e.pointerId === pointerId) end(e.clientX, e.clientY, true); });
  // While dragging with a finger, stop the page from scrolling
  handle.addEventListener("touchmove", e => { if (dragging) e.preventDefault(); }, { passive: false });
  handle.addEventListener("contextmenu", e => { if (dragging || timer) e.preventDefault(); });
  // After a long press starts a drag, keep following the finger even when it leaves the card
  handle.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") try { handle.setPointerCapture(e.pointerId); } catch (_) {} });
}
