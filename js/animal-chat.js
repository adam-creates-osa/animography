// ===== Talk to your animals (card chat) =====
// Uses: window.CHAT, window.REGIONS, window.ANIMAL_REGIONS, STRINGS, el(), t(), fill(), plain(), currentLang
// Free "local" mode: replies are built on this device from the animal's fact sheet. Nothing is sent anywhere.
// Future "ai" mode: sends the message to YOUR middleman server (CHAT.aiEndpoint). If that fails, local mode answers.

const AnimalChat = (() => {
  const C = () => window.CHAT;
  const pick = list => list[Math.floor(Math.random() * list.length)];
  const lastUsed = {}; // avoid saying the exact same line twice in a row

  function isExtinct(a) { return a.status === "EX" || a.status === "EW"; }

  // Turn "¿Dónde VIVES?!" into "donde vives"
  function normalize(text) {
    return plain(text).replace(/[^a-z0-9ñ\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  // Which intents does the message match? (in the order listed in data/chat.js)
  function intentsOf(message) {
    const text = normalize(message);
    return C().intents.filter(i => new RegExp(i.match).test(text)).map(i => i.id);
  }

  // A sentence from the fact sheet that talks about food, if there is one
  const FOOD = {
    en: /\b(eat|eats|ate|eating|feed|feeds|fed|food|nectar|fruits?|insects|prey|hunts?|leaves|seeds|grass|fish|algae|jellyfish|diet)\b/,
    es: /\b(come|comen|comia|comian|comer|aliment\w*|nectar|frutas?|insectos|presas?|caza|cazan|hojas|semillas|pasto|peces|algas|medusas|dieta)\b/
  };
  function eatText(a, L) {
    const texts = [a.summary, a.funFact, a.where].map(x => (x && x[L]) || "");
    for (const text of texts) {
      for (const sentence of text.match(/[^.!?]+[.!?]*/g) || []) {
        if (FOOD[L].test(plain(sentence))) return sentence.trim();
      }
    }
    return "";
  }

  function regionsText(a, L) {
    const ids = (window.ANIMAL_REGIONS && window.ANIMAL_REGIONS[a.id]) || [];
    const names = ids.map(id => (window.REGIONS.find(r => r.id === id) || {}).name).filter(Boolean).map(n => n[L]);
    return names.length ? fill(STRINGS[L].chatRegions, { list: names.join(", ") }) : "";
  }

  // Everything the reply templates can use
  function values(a, L) {
    const S = STRINGS[L];
    return {
      name: a.name[L],
      sound: pick(C().sounds[a.group] ? C().sounds[a.group][L] : [""]),
      summary: a.summary[L], where: a.where[L], threats: a.threats[L], fun: a.funFact[L],
      regions: regionsText(a, L),
      status: S.status[a.status] || a.status,
      note: a.statusNote ? a.statusNote[L] : (a.status === "NE" || a.status === "DD" ? S.neNote : ""),
      help: (a.help[L] || []).map(h => "• " + h).join("\n"),
      group: (S.groups[a.group] || a.group).toLowerCase(),
      sci: a.scientific,
      eatText: eatText(a, L),
      diet: C().diets && C().diets[a.group] ? C().diets[a.group][L] : ""
    };
  }

  // Pick a template (extinct animals use the "_ex" version when there is one)
  function template(key, a, L) {
    const R = C().replies[L];
    const k = isExtinct(a) && R[key + "_ex"] ? key + "_ex" : key;
    let list = R[k] || R.fallback;
    if (list.length > 1) list = list.filter(x => x !== lastUsed[a.id + k]);
    const chosen = pick(list);
    lastUsed[a.id + k] = chosen;
    return chosen;
  }

  function say(key, a, L) {
    return fill(template(key, a, L), values(a, L))
      .replace(/[ \t]+/g, " ").replace(/ +\n/g, "\n").replace(/\n +/g, "\n").trim();
  }

  // Which reply key fits this intent for this animal?
  function keyFor(intent, a, L) {
    const threatened = ["CR", "EN", "VU"].includes(a.status);
    switch (intent) {
      case "how":    return threatened && !isExtinct(a) ? "how_threat" : "how";
      case "status": return a.status === "LC" || a.status === "NT" ? "status_safe" : "status";
      case "eat":    return eatText(a, L) ? "eat_found" : (C().diets && C().diets[a.group] ? "eat_group" : "eat");
      default:       return intent;
    }
  }

  // ---- Free built-in reply ----
  function localReply(a, message) {
    const L = currentLang;
    if (message.length > C().maxMessageLength) return say("tooLong", a, L);
    const found = intentsOf(message);
    if (!found.length) return say("fallback", a, L);

    // "Hello, you're my favorite!" → love wins over greet; greet + a question → short hi + the answer
    const main = found.find(i => i !== "greet") || "greet";
    if (main === "joke") {
      const jokes = C().jokes[a.group] ? C().jokes[a.group][L] : null;
      if (jokes) return pick(jokes);
    }
    const answer = say(keyFor(main, a, L), a, L);
    if (found.includes("greet") && main !== "greet" && main !== "love") {
      return fill(pick(STRINGS[L].chatHiPrefix), { sound: values(a, L).sound }).trim() + " " + answer;
    }
    return answer;
  }

  // The first thing the animal says when the chat opens
  function opening(a) {
    return say(isExtinct(a) ? "open_ex" : "open", a, currentLang);
  }

  // ---- Main reply (async so the future AI version can plug in here) ----
  // history = [{ from: "me" | "animal", text }]
  async function reply(a, message, history) {
    const cfg = C();
    if (cfg.mode === "ai" && cfg.aiEndpoint && message.length <= cfg.maxMessageLength) {
      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 10000);
        const res = await fetch(cfg.aiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: ctrl.signal,
          body: JSON.stringify({
            lang: currentLang,
            animal: {
              id: a.id, name: a.name[currentLang], group: a.group, scientific: a.scientific, status: a.status,
              summary: a.summary[currentLang], where: a.where[currentLang], threats: a.threats[currentLang],
              help: a.help[currentLang], funFact: a.funFact[currentLang]
            },
            message,
            history: history.slice(-10)
          })
        });
        clearTimeout(timer);
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.reply === "string" && data.reply.trim()) return data.reply.trim().slice(0, 800);
        }
      } catch (e) { /* fall back to the free chat below */ }
    }
    return localReply(a, message);
  }

  // ---- Chat window (shown inside the card pop-up) ----
  function renderChat(a, { onBack }) {
    const L = currentLang;
    const history = [];
    let busy = false;

    const back = el("button", { type: "button", class: "chat-back" }, t("chatBack"));
    back.addEventListener("click", onBack);
    const avatar = el("span", { class: `chat-avatar art-${a.group}`, "aria-hidden": "true" }, a.emoji);
    const head = el("div", { class: "chat-head" }, back,
      el("div", { class: "chat-who" }, avatar, el("strong", {}, a.name[L])));

    const log = el("div", { class: "chat-log", role: "log", "aria-live": "polite", "aria-label": fill(t("chatLabel"), { name: a.name[L] }) });

    function bubble(from, text) {
      const b = el("div", { class: `chat-msg chat-${from}` }, text);
      log.append(b);
      log.scrollTop = log.scrollHeight;
      return b;
    }

    function animalSays(text) {
      const typing = el("div", { class: "chat-msg chat-animal chat-typing", "aria-label": t("chatTyping") },
        el("span", {}), el("span", {}), el("span", {}));
      log.append(typing);
      log.scrollTop = log.scrollHeight;
      const wait = Math.min(1400, 450 + text.length * 6);
      return new Promise(done => setTimeout(() => {
        typing.remove();
        bubble("animal", text);
        history.push({ from: "animal", text });
        done();
      }, wait));
    }

    async function send(text) {
      text = text.trim();
      if (!text || busy) return;
      busy = true; sendBtn.disabled = true;
      bubble("me", text);
      history.push({ from: "me", text });
      input.value = "";
      const answer = await reply(a, text, history);
      await animalSays(answer);
      busy = false; sendBtn.disabled = false;
      input.focus();
    }

    const chips = el("div", { class: "chat-chips" });
    for (const s of C().suggestions[L]) {
      const chip = el("button", { type: "button", class: "chat-chip" }, s);
      chip.addEventListener("click", () => send(s));
      chips.append(chip);
    }

    const input = el("input", { type: "text", class: "chat-input", maxlength: String(C().maxMessageLength + 50),
      placeholder: t("chatPlaceholder"), "aria-label": t("chatPlaceholder"), autocomplete: "off" });
    const sendBtn = el("button", { type: "submit", class: "chat-send", "aria-label": t("chatSend") }, "➤");
    const form = el("form", { class: "chat-form" }, input, sendBtn);
    form.addEventListener("submit", e => { e.preventDefault(); send(input.value); });

    const view = el("div", { class: "chat-view" }, head, log, chips, form,
      el("p", { class: "chat-privacy" }, t("chatPrivacy")));
    animalSays(opening(a));
    setTimeout(() => input.focus(), 50);
    return view;
  }

  return { reply, localReply, opening, renderChat, intentsOf };
})();
