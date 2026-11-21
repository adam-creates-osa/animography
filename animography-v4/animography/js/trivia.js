// ===== Trivia game =====
// Uses: window.TRIVIA (questions), window.ANIMALS, window.GAME_RULES, Store, el(), t(), currentLang

const RULES = window.GAME_RULES;
const STATUS_CODES = ["EX", "CR", "EN", "VU", "NT", "LC"]; // answer choices

// The current round lives here while you play (it's not saved until the end)
let round = null;

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Make a "What is this animal's status?" question from the animal list.
// Skips animals whose status still needs checking, so we never quiz on unsure facts.
function makeStatusQuestion(animal) {
  const wrong = shuffle(STATUS_CODES.filter(c => c !== animal.status)).slice(0, 3);
  const codes = [animal.status, ...wrong];
  const name = animal.name;
  return {
    id: "status-" + animal.id,
    animal: animal.id,
    q: {
      en: `What is the ${name.en}'s status on the IUCN Red List?`,
      es: `${name.es}: ¿cuál es su estado en la Lista Roja de la UICN?`
    },
    a: {
      en: codes.map(c => STRINGS.en.status[c]),
      es: codes.map(c => STRINGS.es.status[c])
    },
    why: animal.statusNote || {
      en: `The ${name.en} is listed as ${STRINGS.en.status[animal.status]}.`,
      es: `${name.es}: ${STRINGS.es.status[animal.status]}.`
    }
  };
}

function buildRound() {
  // Only quiz on statuses we are sure about (checked by IUCN, or not marked "needs check")
  const animals = window.ANIMALS.filter(a => (a.statusVerified || !a.needsCheck) && STATUS_CODES.includes(a.status));
  const statusQs = shuffle(animals).slice(0, RULES.statusQuestionsPerRound).map(makeStatusQuestion);
  const factQs = shuffle(window.TRIVIA).slice(0, RULES.questionsPerRound - statusQs.length);
  const questions = shuffle([...factQs, ...statusQs]).map(q => ({
    ...q,
    order: shuffle([0, 1, 2, 3]) // option 0 is always the right one; this mixes them on screen
  }));
  return { questions, index: 0, correct: 0, streak: 0, points: 0, picked: null, lastBonus: false };
}

// ----- Screens -----
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
  box.append(
    el("a", { href: "#/", class: "back" }, t("back")),
    el("h2", { class: "screen-title" }, "🎮 " + t("triviaTitle")),
    el("div", { class: "stat-row" },
      el("div", { class: "stat" }, el("strong", {}, "⭐ " + save.points), el("span", {}, t("yourPoints"))),
      el("div", { class: "stat" }, el("strong", {}, `${save.bestScore}/${r.questionsPerRound}`), el("span", {}, t("bestScore")))
    ),
    el("div", { class: "info-card rules" },
      el("h3", {}, t("howToPlay")),
      el("ul", { class: "help-list" },
        el("li", {}, fill(t("rule1"), { n: r.questionsPerRound })),
        el("li", {}, fill(t("rule2"), { p: r.pointsPerCorrect })),
        el("li", {}, fill(t("rule3"), { s: r.streakLength, b: r.streakBonus })),
        el("li", {}, fill(t("rule4"), { c: r.blindBoxCost }))
      )
    ),
    (() => {
      const btn = el("button", { class: "big-btn play-btn", type: "button" }, t("play"));
      btn.addEventListener("click", () => { round = buildRound(); renderTrivia(); });
      return btn;
    })(),
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
          el("span", {}, new Date(r.date).toLocaleDateString(locale, { day: "numeric", month: "short" })),
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
    const btn = el("button", { type: "button", class: "option" }, q.a[L][optIndex]);
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
      el("span", {}, fill(t("questionOf"), { i: round.index + 1, n: total })),
      el("span", {}, "⭐ " + round.points)
    ),
    el("div", { class: "progress" }, el("div", { class: "progress-bar", style: `width:${(round.index / total) * 100}%` })),
    el("h2", { class: "question" }, q.q[L]),
    options
  );

  if (answered) {
    const right = round.picked === 0;
    const animal = window.ANIMALS.find(a => a.id === q.animal);
    const next = el("button", { type: "button", class: "big-btn next-btn" },
      round.index + 1 < total ? t("next") : t("seeResults"));
    next.addEventListener("click", () => { round.index++; round.picked = null; renderTrivia(); window.scrollTo(0, 0); });

    box.append(
      el("div", { class: `feedback ${right ? "good" : "try"}`, role: "status" },
        el("strong", {}, right ? t("correct") : fill(t("notQuite"), { a: q.a[L][0] })),
        right ? el("span", { class: "plus" }, `+${RULES.pointsPerCorrect}` + (round.lastBonus ? ` +${RULES.streakBonus} 🔥` : "")) : null,
        el("p", {}, q.why[L]),
        animal ? el("a", { href: `#/animal/${animal.id}`, class: "learn-link", target: "_blank", rel: "noopener" },
          fill(t("meetAnimal"), { name: animal.name[L] })) : null
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
    round.points += RULES.pointsPerCorrect;
    if (round.streak % RULES.streakLength === 0) {
      round.points += RULES.streakBonus;
      round.lastBonus = true;
    }
  } else {
    round.streak = 0;
  }
  if (round.index + 1 === round.questions.length) {
    // Last question: save the round now, so closing the page doesn't lose points
    round.saved = Store.addRound(round.correct, round.questions.length, round.points);
    updateCounters();
  }
  renderTrivia();
}

function renderTriviaEnd(box) {
  const save = round.saved || Store.load();
  const total = round.questions.length;
  const msg = round.correct >= total * 0.8 ? t("endGreat") : round.correct >= total * 0.5 ? t("endGood") : t("endKeep");
  const again = el("button", { type: "button", class: "big-btn play-btn" }, t("playAgain"));
  again.addEventListener("click", () => { round = buildRound(); renderTrivia(); });

  const toGo = Math.max(0, RULES.blindBoxCost - save.points);

  box.append(
    el("h2", { class: "screen-title" }, msg),
    el("div", { class: "stat-row" },
      el("div", { class: "stat" }, el("strong", {}, `${round.correct}/${total}`), el("span", {}, t("rightAnswers"))),
      el("div", { class: "stat" }, el("strong", {}, `+${round.points}`), el("span", {}, t("pointsEarned"))),
      el("div", { class: "stat" }, el("strong", {}, "⭐ " + save.points), el("span", {}, t("yourPoints")))
    ),
    el("p", { class: "note" },
      toGo === 0 ? fill(t("boxReady"), { c: RULES.blindBoxCost }) : fill(t("boxToGo"), { n: toGo })),
    toGo === 0 ? el("a", { href: "#/cards", class: "big-btn small box-link" }, "🎁 " + fill(t("openBox"), { c: RULES.blindBoxCost })) : "",
    again,
    el("p", {}, el("a", { href: "#/", class: "back" }, t("home")))
  );
  round = null; // next visit starts fresh
}
