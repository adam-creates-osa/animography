// ===== Hope Stories: true stories of animals that were saved or came back =====
// Stories: data/hope.js

function hopeRead() { return Store.load().hopeRead || []; }
function markHopeRead(id) {
  const d = Store.load();
  d.hopeRead = d.hopeRead || [];
  if (!d.hopeRead.includes(id)) { d.hopeRead.push(id); Store.save(d); updateCounters(); }
}

function renderHope() {
  const box = document.getElementById("hope");
  const L = currentLang;
  const read = hopeRead();
  const stories = window.HOPE_STORIES || [];
  box.replaceChildren(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "🌱 " + t("hopeTitle")),
    el("p", { class: "note" }, t("hopeIntro")),
    el("p", { class: "badge-count" }, fill(t("hopeCount"), { n: read.filter(id => stories.some(s => s.id === id)).length, total: stories.length })),
    el("div", { class: "hope-grid" }, ...stories.map(s => {
      const a = window.ANIMALS.find(x => x.id === s.animals[0]);
      return el("a", { href: `#/hope/${s.id}`, class: "hope-card" + (read.includes(s.id) ? " read" : "") },
        a ? photoOrEmoji(a, { width: 500, allowPhoto: a.photo && a.photo.cardOk, cls: "hope-art" }) : "",
        el("span", { class: "hope-emoji", "aria-hidden": "true" }, s.emoji),
        el("strong", {}, s.title[L]),
        el("span", { class: "hope-teaser" }, s.teaser[L]),
        read.includes(s.id) ? el("span", { class: "hope-done" }, "✅ " + t("hopeReadIt")) : "");
    }))
  );
}

function renderHopeStory(id) {
  const box = document.getElementById("hope");
  const L = currentLang;
  const stories = window.HOPE_STORIES || [];
  const i = stories.findIndex(s => s.id === id);
  const s = stories[i];
  if (!s) { box.replaceChildren(el("a", { href: "#/hope", class: "back" }, t("hopeBack")), el("p", {}, t("notFound"))); return; }
  markHopeRead(s.id);
  const animals = s.animals.map(aid => window.ANIMALS.find(a => a.id === aid)).filter(Boolean);
  const hero = animals[0] ? photoOrEmoji(animals[0], { width: 1000, allowPhoto: Boolean(animals[0].photo), cls: `hero hero-${animals[0].group}` }) : "";
  const prev = stories[(i - 1 + stories.length) % stories.length], next = stories[(i + 1) % stories.length];
  const storyBox = el("section", { class: "info-card hope-story" }, ...s.text[L].map(p => el("p", {}, p)));
  const lesson = el("section", { class: "info-card fun" }, el("h3", {}, "💡 " + t("hopeLesson")), el("p", {}, s.lesson[L]));
  const title = el("h2", { class: "animal-name" }, s.emoji + " " + s.title[L]);
  box.replaceChildren(
    el("a", { href: "#/hope", class: "back" }, t("hopeBack")),
    hero,
    title,
    s.byline ? el("p", { class: "note hope-byline" }, "✍️ " + t("hopeByline")) : "",
    el("div", { class: "animal-actions" }, ReadAloud.makeButton(() => [title, storyBox, lesson])),
    storyBox,
    lesson,
    el("section", { class: "info-card" }, el("h3", {}, "🐾 " + t("hopeMeet")),
      el("div", { class: "results" }, ...animals.map(a => animalButton(a)))),
    el("section", { class: "info-card" }, el("h3", {}, "📚 " + t("hopeSources")),
      el("ul", { class: "help-list" }, ...s.sources.map(src =>
        el("li", {}, el("a", { href: src.url, target: "_blank", rel: "noopener" }, src.name)))),
      el("p", { class: "size-approx" }, t("hopeSourcesNote"))),
    el("div", { class: "hope-nav" },
      el("a", { href: `#/hope/${prev.id}`, class: "chip" }, "← " + prev.title[L]),
      el("a", { href: `#/hope/${next.id}`, class: "chip" }, next.title[L] + " →"))
  );
}
