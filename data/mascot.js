// The Animography mascot: a friendly sloth guide.
// Change the name, tips, rewards and messages here. Everything is in English (en) and Spanish (es).
window.MASCOT = {
  name: "Lento",

  // ----- Learning rewards: bonus points for reading animal pages -----
  learning: {
    everyNewAnimals: 5,   // after reading this many NEW animal pages...
    minSecondsOnPage: 8,  // ...each one read for at least this many seconds...
    minPoints: 10,        // ...the mascot gives a random bonus between minPoints...
    maxPoints: 30         // ...and maxPoints.
  },

  // ----- Trivia milestones: perfect rounds (10/10, any level) earn a personal secret code -----
  // type: "total" = perfect rounds in total · "streak" = perfect rounds in a row
  // reward: { points: 50 } or { randomCard: "rare" } or { randomCard: "secretRare" } or { card: "animal-id" }
  milestones: [
    { id: "perfect-1",  type: "total",  count: 1,  reward: { points: 25 } },
    { id: "perfect-3",  type: "total",  count: 3,  reward: { points: 50 } },
    { id: "streak-5",   type: "streak", count: 5,  reward: { randomCard: "rare" } },
    { id: "perfect-10", type: "total",  count: 10, reward: { randomCard: "secretRare" } }
  ],

  // ----- Words -----
  text: {
    en: {
      hello: "Hi! I'm {name}, your sloth guide. 🦥 I'm slow, but I know a LOT about Costa Rica's animals! Tap me any time for tips, shortcuts and secret codes.",
      open: "Talk to {name}, the sloth guide",
      close: "Close",
      tipBtn: "💡 Tip", goBtn: "🧭 Take me to…", codeBtn: "🔑 Secret code", rewardsBtn: "🎁 My rewards",
      goTitle: "Where do you want to go?",
      places: { animals: "🐾 Animals", geography: "🗺️ Geography", trivia: "🎮 Trivia", cards: "🃏 My Cards", favorites: "❤️ My Favorites", home: "🏠 Home" },
      codeTitle: "Type a secret code:",
      codePlaceholder: "e.g. SLOTH-ABCD-1234",
      codeSubmit: "Use code",
      codeEmpty: "Type a code first! 😊",
      codeWrong: "Hmm… I don't know that code. Check the spelling and try again!",
      codeUsed: "You already used that code on this device. 🦥",
      codeExpired: "Oh no, that code has expired. 🍂",
      gotPoints: "Code accepted! You got {n} ⭐ points! 🎉",
      gotCard: "Code accepted! You got a new card! 🎉",
      learnBonus: "Wow, you've read {n} animal pages! Learning deserves a reward: here are {p} ⭐ bonus points! 🌿",
      learnProgress: "Animal pages read: {n}. Read {left} more for your next surprise bonus!",
      milestone: "PERFECT! 🏆 You reached a milestone: {what}. Here's your secret code:",
      milestoneHow: "Tap \"🔑 Secret code\" and type it in to get your prize. I'll keep it in \"🎁 My rewards\" too!",
      milestoneNames: { total: "{n} perfect rounds", streak: "{n} perfect rounds in a row" },
      perfectStats: "Perfect trivia rounds: {total} (in a row right now: {streak}).",
      myCodes: "Your codes:",
      noCodes: "No codes yet. Get 10/10 in trivia to earn some!",
      used: "used", unused: "not used yet",
      nextMilestone: "Next code: {what}.",
      allMilestones: "You've earned every trivia code. Legend! 🌟",
      tips: {
        home: ["Tap Animals to explore 250 animals of Costa Rica!", "Play trivia to earn ⭐ points, then open blind boxes to win cards!", "Use the EN | ES buttons at the top to switch languages.", "Read animal pages and I might surprise you with bonus points!"],
        animals: ["Use the group buttons and the Red List colors to filter animals.", "Search works with English, Spanish or scientific names, even without accents!", "Every few new animals you read about, I give you a bonus. 🌿"],
        animal: ["Tap ♡ to save this animal to your favorites.", "Check \"How you can help\": small actions make a big difference!", "Tap a region button to see who else lives there.", "Take your time reading: I only count pages you really read. 📖"],
        geography: ["Tap a marker on the map to explore a region.", "Cocos Island is more than 500 km away, so it has its own box on the map!", "The Ocean is a region too: whales, dolphins and sea turtles live there."],
        region: ["Use the group buttons to see only birds, frogs, insects…", "Many animals live in more than one region."],
        trivia: ["Start with Beginner, then try Advanced for 20 ⭐ per answer!", "Get 3 right in a row for a 🔥 bonus.", "Perfect rounds (10/10) earn secret codes from me!", "Wrong answers are fine: tap \"Meet the…\" to learn more."],
        cards: ["Blind boxes cost 100 ⭐. Play trivia to earn points!", "Tap any card to see it bigger.", "Secret codes can unlock rare cards!"],
        favorites: ["Your favorites are saved on this device.", "Tap ♡ on any animal page to add it here."]
      }
    },
    es: {
      hello: "¡Hola! Soy {name}, tu guía perezoso. 🦥 Soy lento, ¡pero sé MUCHÍSIMO de los animales de Costa Rica! Tócame cuando quieras para consejos, atajos y códigos secretos.",
      open: "Hablar con {name}, el perezoso guía",
      close: "Cerrar",
      tipBtn: "💡 Consejo", goBtn: "🧭 Llévame a…", codeBtn: "🔑 Código secreto", rewardsBtn: "🎁 Mis premios",
      goTitle: "¿A dónde quieres ir?",
      places: { animals: "🐾 Animales", geography: "🗺️ Geografía", trivia: "🎮 Trivia", cards: "🃏 Mis Cartas", favorites: "❤️ Mis Favoritos", home: "🏠 Inicio" },
      codeTitle: "Escribe un código secreto:",
      codePlaceholder: "ej. SLOTH-ABCD-1234",
      codeSubmit: "Usar código",
      codeEmpty: "¡Primero escribe un código! 😊",
      codeWrong: "Mmm… no conozco ese código. ¡Revisa cómo lo escribiste e inténtalo otra vez!",
      codeUsed: "Ya usaste ese código en este dispositivo. 🦥",
      codeExpired: "¡Ay no, ese código ya venció! 🍂",
      gotPoints: "¡Código aceptado! ¡Ganaste {n} ⭐ puntos! 🎉",
      gotCard: "¡Código aceptado! ¡Ganaste una carta nueva! 🎉",
      learnBonus: "¡Wow, ya leíste {n} páginas de animales! Aprender merece un premio: ¡aquí tienes {p} ⭐ puntos extra! 🌿",
      learnProgress: "Páginas de animales leídas: {n}. ¡Lee {left} más para tu próximo premio sorpresa!",
      milestone: "¡PERFECTO! 🏆 Llegaste a una meta: {what}. Aquí está tu código secreto:",
      milestoneHow: "Toca \"🔑 Código secreto\" y escríbelo para recibir tu premio. ¡También lo guardo en \"🎁 Mis premios\"!",
      milestoneNames: { total: "{n} rondas perfectas", streak: "{n} rondas perfectas seguidas" },
      perfectStats: "Rondas perfectas de trivia: {total} (seguidas ahora: {streak}).",
      myCodes: "Tus códigos:",
      noCodes: "Todavía no tienes códigos. ¡Saca 10/10 en la trivia para ganar!",
      used: "usado", unused: "sin usar",
      nextMilestone: "Próximo código: {what}.",
      allMilestones: "Ganaste todos los códigos de trivia. ¡Eres una leyenda! 🌟",
      tips: {
        home: ["Toca Animales para explorar 250 animales de Costa Rica.", "Juega trivia para ganar ⭐ puntos y abre cajas sorpresa para ganar cartas.", "Usa los botones EN | ES de arriba para cambiar de idioma.", "¡Lee páginas de animales y tal vez te sorprenda con puntos extra!"],
        animals: ["Usa los botones de grupos y los colores de la Lista Roja para filtrar.", "La búsqueda funciona con nombres en español, inglés o científicos, ¡hasta sin tildes!", "Cada pocos animales nuevos que leas, te doy un premio. 🌿"],
        animal: ["Toca ♡ para guardar este animal en tus favoritos.", "Revisa \"Cómo puedes ayudar\": ¡las acciones pequeñas hacen una gran diferencia!", "Toca un botón de región para ver quién más vive ahí.", "Lee con calma: solo cuento las páginas que de verdad lees. 📖"],
        geography: ["Toca un marcador en el mapa para explorar una región.", "¡La Isla del Coco está a más de 500 km, por eso tiene su propio cuadro en el mapa!", "El océano también es una región: ahí viven ballenas, delfines y tortugas marinas."],
        region: ["Usa los botones de grupos para ver solo aves, ranas, insectos…", "Muchos animales viven en más de una región."],
        trivia: ["Empieza en Principiante y luego prueba Avanzado: ¡20 ⭐ por respuesta!", "Acierta 3 seguidas para un bono 🔥.", "¡Las rondas perfectas (10/10) ganan códigos secretos!", "Equivocarse está bien: toca \"Conoce…\" para aprender más."],
        cards: ["Las cajas sorpresa cuestan 100 ⭐. ¡Juega trivia para ganar puntos!", "Toca cualquier carta para verla en grande.", "¡Los códigos secretos pueden desbloquear cartas raras!"],
        favorites: ["Tus favoritos se guardan en este dispositivo.", "Toca ♡ en la página de cualquier animal para agregarlo aquí."]
      }
    }
  }
};
