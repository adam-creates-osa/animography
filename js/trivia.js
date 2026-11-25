// ===== Trivia game: 3 levels, hand-written + automatic questions, no repeats =====
// Uses: window.TRIVIA, window.ANIMALS, window.REGIONS, window.ANIMAL_REGIONS, window.GAME_RULES,
//       Store, el(), t(), fill(), currentLang, STRINGS

const RULES = window.GAME_RULES;
const LEVELS = ["beginner", "intermediate", "advanced"];
const LEVEL_ICON = { beginner: "🌱", intermediate: "🌿", advanced: "🌳" };
const STATUS_CODES = ["EX", "CR", "EN", "VU", "NT", "LC"];   // answer choices for status questions
const GROUP_IDS = ["mammal", "bird", "reptile", "amphibian", "insect"];
const LEVEL_KEY = "animography.level";

let round = null;   // the round being played (only saved when it ends)
let chosenLevel = (() => { try { return localStorage.getItem(LEVEL_KEY) || "beginner"; } catch (e) { return "beginner"; } })();

// ---------- small helpers ----------
function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const pick = list => list[Math.floor(Math.random() * list.length)];
const both = f => ({ en: f("en"), es: f("es") });            // build the same text in both languages
const nm = (a, L) => a.name[L];
const sure = a => !a.needsCheck || a.statusVerified;          // only quiz on facts we're sure about
const levelRules = lv => RULES.levels[lv];

// ---------- automatic question makers ----------
// Each returns a question (first answer = right one) or null if it can't make a good one.
const AUTO = {
  group(a) {
    const wrong = shuffle(GROUP_IDS.filter(g => g !== a.group)).slice(0, 3);
    return {
      id: `auto:group:${a.id}`, animal: a.id,
      q: both(L => fill(STRINGS[L].autoGroupQ, { name: nm(a, L) })),
      a: both(L => [a.group, ...wrong].map(g => STRINGS[L].groups[g])),
      why: both(L => fill(STRINGS[L].autoGroupWhy, { name: nm(a, L), group: STRINGS[L].groups[a.group] }))
    };
  },
  groupPick(a) {
    const others = shuffle(ANIMALS.filter(x => x.group !== a.group)).slice(0, 3);
    return {
      id: `auto:groupPick:${a.id}`, animal: a.id,
      q: both(L => {
        const one = STRINGS[L].groups[a.group].toLowerCase();
        const aone = L === "en" ? (/^[aeiou]/.test(one) ? "an " : "a ") + one : "un " + one;
        return fill(STRINGS[L].autoGroupPickQ, { aone });
      }),
      a: both(L => [a, ...others].map(x => nm(x, L))),
      why: both(L => fill(STRINGS[L].autoGroupWhy, { name: nm(a, L), group: STRINGS[L].groups[a.group] }))
    };
  },
  status(a) {
    if (!sure(a) || !STATUS_CODES.includes(a.status)) return null;
    const wrong = shuffle(STATUS_CODES.filter(c => c !== a.status)).slice(0, 3);
    return {
      id: `auto:status:${a.id}`, animal: a.id,
      q: both(L => fill(STRINGS[L].autoStatusQ, { name: nm(a, L) })),
      a: both(L => [a.status, ...wrong].map(c => STRINGS[L].status[c])),
      why: a.statusNote || both(L => fill(STRINGS[L].autoStatusWhy, { name: nm(a, L), status: STRINGS[L].status[a.status] }))
    };
  },
  region(a) {
    const mine = window.ANIMAL_REGIONS?.[a.id] || [];
    if (!mine.length || mine.length > 2) return null;          // only animals with a clear home
    const rightId = pick(mine);
    const right = window.REGIONS.find(r => r.id === rightId);
    const wrong = shuffle(window.REGIONS.filter(r => !mine.includes(r.id))).slice(0, 3);
    return {
      id: `auto:region:${a.id}`, animal: a.id,
      q: both(L => fill(STRINGS[L].autoRegionQ, { name: nm(a, L) })),
      a: both(L => [right, ...wrong].map(r => r.name[L])),
      why: both(L => a.where[L])
    };
  },
  riddle(a) {
    // Skip fun facts that give away the animal's name
    const words = L => nm(a, L).toLowerCase().split(/[\s-]+/).filter(w => w.length > 3);
    if (["en", "es"].some(L => words(L).some(w => a.funFact[L].toLowerCase().includes(w)))) return null;
    const others = shuffle(ANIMALS.filter(x => x.group !== a.group)).slice(0, 3);  // other groups, so only one fits
    return {
      id: `auto:riddle:${a.id}`, animal: a.id,
      q: both(L => fill(STRINGS[L].autoRiddleQ, { fact: a.funFact[L] })),
      a: both(L => [a, ...others].map(x => nm(x, L))),
      why: both(L => a.summary[L])
    };
  },
  scientific(a) {
    const others = shuffle(ANIMALS.filter(x => x.group === a.group && x.id !== a.id && x.scientific !== a.scientific)).slice(0, 3);
    if (others.length < 3) return null;
    return {
      id: `auto:sci:${a.id}`, animal: a.id,
      q: both(L => fill(STRINGS[L].autoSciQ, { name: nm(a, L) })),
      a: { en: [a, ...others].map(x => x.scientific), es: [a, ...others].map(x => x.scientific) },
      why: both(L => fill(STRINGS[L].autoSciWhy, { name: nm(a, L), sci: a.scientific }))
    };
  },
  reverseScientific(a) {
    const others = shuffle(ANIMALS.filter(x => x.group === a.group && x.id !== a.id)).slice(0, 3);
    if (others.length < 3) return null;
    return {
      id: `auto:rsci:${a.id}`, animal: a.id,
      q: both(L => fill(STRINGS[L].autoRevSciQ, { sci: a.scientific })),
      a: both(L => [a, ...others].map(x => nm(x, L))),
      why: both(L => fill(STRINGS[L].autoSciWhy, { name: nm(a, L), sci: a.scientific }))
    };
  },
  whichCR(a) {
    if (a.status !== "CR" || !sure(a)) return null;
    const safe = shuffle(ANIMALS.filter(x => ["LC", "NT"].includes(x.status) && sure(x))).slice(0, 3);
    return {
      id: `auto:whichCR:${a.id}`, animal: a.id,
      q: both(L => STRINGS[L].autoWhichCRQ),
      a: both(L => [a, ...safe].map(x => nm(x, L))),
      why: both(L => fill(STRINGS[L].autoStatusWhy, { name: nm(a, L), status: STRINGS[L].status.CR }))
    };
  }
};

// ---------- building a round ----------
function buildRound(level) {
  const lr = levelRules(level);
  const total = RULES.questionsPerRound;
  const seen = Store.seenIds(level);
  const used = new Set();            // animals already in this round
  const questions = [];

  // 1) Hand-written questions for this level, unseen first
  const written = window.TRIVIA.filter(q => q.level === level);
  const fresh = shuffle(written.filter(q => !seen.has(q.id)));
  const pool = fresh.length >= lr.written ? fresh : [...fresh, ...shuffle(written.filter(q => seen.has(q.id)))];
  for (const q of pool) {
    if (questions.length >= lr.written) break;
    if (used.has(q.animal)) continue;
    questions.push(q); used.add(q.animal);
  }

  // 2) Automatic questions, unseen first, different animals
  let tries = 0;
  while (questions.length < total && tries < 600) {
    tries++;
    const type = pick(lr.auto);
    const a = pick(ANIMALS);
    if (used.has(a.id)) continue;
    const q = AUTO[type](a);
    if (!q || (seen.has(q.id) && tries < 400)) continue;
    questions.push(q); used.add(a.id);
  }
  // Safety net: if something went wrong, fill with any written question
  for (const q of shuffle(window.TRIVIA)) { if (questions.length >= total) break; if (!questions.includes(q)) questions.push(q); }

  return {
    level,
    questions: shuffle(questions).map(q => ({ ...q, order: shuffle([0, 1, 2, 3]) })),
    index: 0, correct: 0, streak: 0, points: 0, picked: null, lastBonus: false
  };
}

// ---------- screens ----------
function renderTrivia() {
  const box = document.getElementById("trivia");
  box.replaceChildren();
  if (!round) renderTriviaStart(box);
  else if (round.index >= round.questions.length) renderTriviaEnd(box);
  else renderQuestion(box);
}

function renderTriviaStart(box) {
  const save = Store.load();
  const r = RULES;

  // Level picker
  const picker = el("div", { class: "level-picker", role: "radiogroup", "aria-label": t("chooseLevel") });
  for (const lv of LEVELS) {
    const card = el("button", { type: "button", class: `level-card level-${lv}`, role: "radio",
      "aria-checked": String(lv === chosenLevel) },
      el("span", { class: "level-icon", "aria-hidden": "true" }, LEVEL_ICON[lv]),
      el("strong", {}, t("levels")[lv]),
      el("span", { class: "level-desc" }, t("levelDesc")[lv]),
      el("span", { class: "level-meta" },
        fill(t("levelPoints"), { p: levelRules(lv).pointsPerCorrect }) + " · " +
        fill(t("levelBest"), { n: save.bestByLevel?.[lv] || 0, total: r.questionsPerRound }))
    );
    card.addEventListener("click", () => {
      chosenLevel = lv;
      try { localStorage.setItem(LEVEL_KEY, lv); } catch (e) { /* ignore */ }
      renderTrivia();
    });
    picker.append(card);
  }

  const play = el("button", { class: "big-btn play-btn", type: "button" },
    `${t("play")} ${LEVEL_ICON[chosenLevel]} ${t("levels")[chosenLevel]}`);
  play.addEventListener("click", () => { round = buildRound(chosenLevel); renderTrivia(); });

  box.append(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "🎮 " + t("triviaTitle")),
    el("div", { class: "stat-row" },
      el("div", { class: "stat" }, el("strong", {}, "⭐ " + save.points), el("span", {}, t("yourPoints")))
    ),
    el("h3", { class: "choose-title" }, t("chooseLevel")),
    picker,
    play,
    el("div", { class: "info-card rules" },
      el("h3", {}, t("howToPlay")),
      el("ul", { class: "help-list" },
        el("li", {}, fill(t("rule1"), { n: r.questionsPerRound })),
        el("li", {}, fill(t("rule2"), { p: levelRules(chosenLevel).pointsPerCorrect })),
        el("li", {}, fill(t("rule3"), { s: r.streakLength, b: r.streakBonus })),
        el("li", {}, fill(t("rule4"), { c: r.blindBoxCost }))
      )
    ),
    save.rounds.length ? renderHistory(save.rounds) : ""
  );
}

function renderHistory(rounds) {
  const locale = currentLang === "es" ? "es-CR" : "en-US";
  return el("div", { class: "info-card history" },
    el("h3", {}, t("recentRounds")),
    el("ul", { class: "history-list" },
      rounds.slice(0, 5).map(r =>
        el("li", {},
          el("span", {}, (r.level ? LEVEL_ICON[r.level] + " " : "") +
            new Date(r.date).toLocaleDateString(locale, { day: "numeric", month: "short" })),
          el("span", {}, `✅ ${r.correct}/${r.total}`),
          el("span", {}, `⭐ +${r.points}`)
        )
      )
    )
  );
}

function renderQuestion(box) {
  const L = currentLang;
  const q = round.questions[round.index];
  const answered = round.picked !== null;
  const total = round.questions.length;

  const options = el("div", { class: "options" });
  q.order.forEach(optIndex => {
    const btn = el("button", { type: "button", class: "option" + (q.id.startsWith("auto:sci") ? " sci" : "") }, q.a[L][optIndex]);
    if (answered) {
      btn.disabled = true;
      if (optIndex === 0) btn.classList.add("right");
      else if (optIndex === round.picked) btn.classList.add("wrong");
    } else {
      btn.addEventListener("click", () => answer(optIndex));
    }
    options.append(btn);
  });

  box.append(
    el("div", { class: "trivia-top" },
      el("a", { href: "#/animals", class: "quit-btn" }, t("quit")),
      el("span", {}, LEVEL_ICON[round.level] + " " + fill(t("questionOf"), { i: round.index + 1, n: total })),
      el("span", {}, "⭐ " + round.points)
    ),
    el("div", { class: "progress" }, el("div", { class: "progress-bar", style: `width:${(round.index / total) * 100}%` })),
    el("h2", { class: "question" }, q.q[L]),
    options
  );

  if (answered) {
    const right = round.picked === 0;
    const animal = ANIMALS.find(a => a.id === q.animal);
    const next = el("button", { type: "button", class: "big-btn next-btn" },
      round.index + 1 < total ? t("next") : t("seeResults"));
    next.addEventListener("click", () => { round.index++; round.picked = null; renderTrivia(); window.scrollTo(0, 0); });

    box.append(
      el("div", { class: `feedback ${right ? "good" : "try"}`, role: "status" },
        el("strong", {}, right ? t("correct") : fill(t("notQuite"), { a: q.a[L][0] })),
        right ? el("span", { class: "plus" }, `+${levelRules(round.level).pointsPerCorrect}` + (round.lastBonus ? ` +${RULES.streakBonus} 🔥` : "")) : "",
        el("p", {}, q.why[L]),
        animal ? el("a", { href: `#/animal/${animal.id}`, class: "learn-link", target: "_blank", rel: "noopener" },
          fill(t("meetAnimal"), { name: animal.name[L] })) : ""
      ),
      next
    );
    next.focus();
  }
}

function answer(optIndex) {
  round.picked = optIndex;
  round.lastBonus = false;
  if (optIndex === 0) {
    round.correct++;
    round.streak++;
    round.points += levelRules(round.level).pointsPerCorrect;
    if (round.streak % RULES.streakLength === 0) { round.points += RULES.streakBonus; round.lastBonus = true; }
  } else {
    round.streak = 0;
  }
  if (round.index + 1 === round.questions.length) {
    // Last question: save the round and remember these questions so they don't repeat soon
    round.saved = Store.addRound(round.correct, round.questions.length, round.points, round.level);
    Store.markSeen(round.level, round.questions.map(q => q.id), RULES.rememberSeen);
    updateCounters();
  }
  renderTrivia();
}

function renderTriviaEnd(box) {
  const save = round.saved || Store.load();
  const total = round.questions.length;
  const msg = round.correct >= total * 0.8 ? t("endGreat") : round.correct >= total * 0.5 ? t("endGood") : t("endKeep");
  const level = round.level;
  const again = el("button", { type: "button", class: "big-btn play-btn" }, t("playAgain"));
  again.addEventListener("click", () => { round = buildRound(level); renderTrivia(); });
  const change = el("button", { type: "button", class: "chip change-level" }, t("changeLevel"));
  change.addEventListener("click", () => { round = null; renderTrivia(); });

  const toGo = Math.max(0, RULES.blindBoxCost - save.points);

  box.append(
    el("h2", { class: "screen-title" }, msg),
    el("p", { class: "level-done" }, LEVEL_ICON[level] + " " + t("levels")[level]),
    el("div", { class: "stat-row" },
      el("div", { class: "stat" }, el("strong", {}, `${round.correct}/${total}`), el("span", {}, t("rightAnswers"))),
      el("div", { class: "stat" }, el("strong", {}, `+${round.points}`), el("span", {}, t("pointsEarned"))),
      el("div", { class: "stat" }, el("strong", {}, "⭐ " + save.points), el("span", {}, t("yourPoints")))
    ),
    el("p", { class: "note" },
      toGo === 0 ? fill(t("boxReady"), { c: RULES.blindBoxCost }) : fill(t("boxToGo"), { n: toGo })),
    toGo === 0 ? el("a", { href: "#/cards", class: "big-btn small box-link" }, "🎁 " + fill(t("openBox"), { c: RULES.blindBoxCost })) : "",
    again,
    change,
    el("p", {}, el("a", { href: "#/", class: "back" }, t("home")))
  );
  round = null; // next visit starts fresh
}
