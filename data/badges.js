// Badges players can earn. You can change the names, the "how" text and the numbers.
// Each "test" looks at the player's progress (s) and says if the badge is earned.
// Once a badge is earned it stays earned, even if things change later.
//
// What "s" contains:
//   s.owned       how many different cards        s.byRarity.common/rare/special/secretRare
//   s.groupDone   e.g. s.groupDone.sea = true     s.allDone (all cards)
//   s.binders     how many binders                s.biggestBinder (cards in the fullest binder)
//   s.trades      trades with Lento               s.read (animal pages read)
//   s.favorites   favorites                       s.rounds (trivia rounds played)
//   s.perfect     10/10 rounds                    s.perfectLevel.beginner/intermediate/advanced (true/false)
//   s.earned      all points ever earned          s.codes (secret codes used)
//   s.memoryPlayed  Memory Match games finished   s.memoryHardBonus (won Hard with the bonus)
window.BADGES = [
  // ---- Collecting ----
  { id: "first-card", icon: "🃏", test: s => s.owned >= 1,
    name: { en: "First Card", es: "Primera Carta" }, how: { en: "Open your first blind box.", es: "Abre tu primera caja sorpresa." } },
  { id: "collector-25", icon: "📦", test: s => s.owned >= 25,
    name: { en: "Collector", es: "Coleccionista" }, how: { en: "Collect 25 different cards.", es: "Colecciona 25 cartas diferentes." } },
  { id: "collector-100", icon: "🗃️", test: s => s.owned >= 100,
    name: { en: "Super Collector", es: "Súper Coleccionista" }, how: { en: "Collect 100 different cards.", es: "Colecciona 100 cartas diferentes." } },
  { id: "first-rare", icon: "💎", test: s => s.byRarity.rare >= 1,
    name: { en: "First Rare", es: "Primera Rara" }, how: { en: "Get your first Rare card.", es: "Consigue tu primera carta Rara." } },
  { id: "first-special", icon: "🔮", test: s => s.byRarity.special >= 1,
    name: { en: "First Special", es: "Primera Especial" }, how: { en: "Get your first Special card.", es: "Consigue tu primera carta Especial." } },
  { id: "first-secret", icon: "✨", test: s => s.byRarity.secretRare >= 1,
    name: { en: "First Secret Rare", es: "Primera Rara Secreta" }, how: { en: "Get your first Secret Rare card.", es: "Consigue tu primera carta Rara Secreta." } },

  // ---- Complete sets (each also gives the set reward) ----
  { id: "set-mammal", icon: "🐆", test: s => s.groupDone.mammal,
    name: { en: "Mammal Master", es: "Maestro de Mamíferos" }, how: { en: "Collect all 50 mammal cards.", es: "Colecciona las 50 cartas de mamíferos." } },
  { id: "set-bird", icon: "🦜", test: s => s.groupDone.bird,
    name: { en: "Bird Watcher", es: "Observador de Aves" }, how: { en: "Collect all 50 bird cards.", es: "Colecciona las 50 cartas de aves." } },
  { id: "set-reptile", icon: "🐢", test: s => s.groupDone.reptile,
    name: { en: "Reptile Ranger", es: "Guardián de Reptiles" }, how: { en: "Collect all 50 reptile cards.", es: "Colecciona las 50 cartas de reptiles." } },
  { id: "set-amphibian", icon: "🐸", test: s => s.groupDone.amphibian,
    name: { en: "Frog Friend", es: "Amigo de las Ranas" }, how: { en: "Collect all 50 amphibian cards.", es: "Colecciona las 50 cartas de anfibios." } },
  { id: "set-insect", icon: "🦋", test: s => s.groupDone.insect,
    name: { en: "Bug Buddy", es: "Amigo de los Insectos" }, how: { en: "Collect all 50 insect cards.", es: "Colecciona las 50 cartas de insectos." } },
  { id: "set-sea", icon: "🌊", test: s => s.groupDone.sea,
    name: { en: "Ocean Explorer", es: "Explorador del Océano" }, how: { en: "Collect all 50 sea creature cards.", es: "Colecciona las 50 cartas de criaturas marinas." } },
  { id: "legendary", icon: "👑", test: s => s.allDone,
    name: { en: "Legendary Collector", es: "Coleccionista Legendario" }, how: { en: "Collect every single card.", es: "Colecciona todas las cartas." } },

  // ---- Binders and trading ----
  { id: "first-binder", icon: "📒", test: s => s.binders >= 1,
    name: { en: "Organizer", es: "Organizador" }, how: { en: "Make your first binder.", es: "Crea tu primer álbum." } },
  { id: "binder-20", icon: "📚", test: s => s.biggestBinder >= 20,
    name: { en: "Binder Pro", es: "Experto en Álbumes" }, how: { en: "Put 20 cards in one binder.", es: "Pon 20 cartas en un álbum." } },
  { id: "first-trade", icon: "🤝", test: s => s.trades >= 1,
    name: { en: "Trader", es: "Negociante" }, how: { en: "Trade duplicates with Lento.", es: "Intercambia cartas repetidas con Lento." } },

  // ---- Learning ----
  { id: "reader-25", icon: "📖", test: s => s.read >= 25,
    name: { en: "Curious Reader", es: "Lector Curioso" }, how: { en: "Read 25 animal pages.", es: "Lee 25 fichas de animales." } },
  { id: "reader-100", icon: "🧠", test: s => s.read >= 100,
    name: { en: "100 Animals Read", es: "100 Animales Leídos" }, how: { en: "Read 100 animal pages.", es: "Lee 100 fichas de animales." } },
  { id: "favorites-10", icon: "❤️", test: s => s.favorites >= 10,
    name: { en: "Animal Lover", es: "Amante de los Animales" }, how: { en: "Add 10 animals to your favorites.", es: "Agrega 10 animales a tus favoritos." } },

  // ---- Trivia ----
  { id: "trivia-first", icon: "🎮", test: s => s.rounds >= 1,
    name: { en: "Trivia Starter", es: "Primera Trivia" }, how: { en: "Finish a trivia round.", es: "Termina una ronda de trivia." } },
  { id: "perfect-1", icon: "🎯", test: s => s.perfect >= 1,
    name: { en: "Perfect Score", es: "Puntaje Perfecto" }, how: { en: "Get 10 out of 10 in a trivia round.", es: "Saca 10 de 10 en una ronda de trivia." } },
  { id: "perfect-advanced", icon: "🏆", test: s => s.perfectLevel.advanced,
    name: { en: "Trivia Champion", es: "Campeón de Trivia" }, how: { en: "Get 10 out of 10 on Advanced.", es: "Saca 10 de 10 en Avanzado." } },
  // ---- Games ----
  { id: "memory-first", icon: "🧠", test: s => s.memoryPlayed >= 1,
    name: { en: "Good Memory", es: "Buena Memoria" }, how: { en: "Finish a Memory Match game.", es: "Termina un juego de Memoria." } },
  { id: "memory-master", icon: "🃏", test: s => s.memoryHardBonus,
    name: { en: "Memory Master", es: "Maestro de la Memoria" }, how: { en: "Win Hard Memory Match with the few-mistakes bonus.", es: "Gana Memoria en Difícil con el bono de pocos errores." } },
  { id: "points-1000", icon: "⭐", test: s => s.earned >= 1000,
    name: { en: "Star Saver", es: "Junta Estrellas" }, how: { en: "Earn 1,000 points in total.", es: "Gana 1.000 puntos en total." } },
  { id: "secret-code", icon: "🔑", test: s => s.codes >= 1,
    name: { en: "Code Breaker", es: "Descifrador" }, how: { en: "Use a secret code with Lento.", es: "Usa un código secreto con Lento." } }
];
