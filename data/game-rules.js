// Animography game rules. Change any number here and the game follows it.
window.GAME_RULES = {
  questionsPerRound: 10,      // questions in one trivia round
  streakLength: 3,            // right answers in a row needed for a bonus...
  streakBonus: 5,             // ...and how many bonus points it gives

  // Difficulty levels. "written" = how many hand-written questions per round (the rest are automatic).
  // "auto" = which kinds of automatic questions this level uses:
  //   group: "What kind of animal is the …?"         groupPick: "Which of these is a bird?"
  //   status: "What is its Red List status?"          region: "Where in Costa Rica can you find it?"
  //   riddle: "Which animal is this?" (from fun facts) scientific / reverseScientific: scientific names
  //   whichCR: "Which of these is Critically Endangered?"
  levels: {
    beginner:     { pointsPerCorrect: 10, written: 6, auto: ["group", "groupPick"] },
    intermediate: { pointsPerCorrect: 15, written: 5, auto: ["status", "region", "riddle"] },
    advanced:     { pointsPerCorrect: 20, written: 4, auto: ["scientific", "reverseScientific", "whichCR", "region", "riddle"] }
  },
  rememberSeen: 120,          // how many recent questions per level the game avoids repeating

  // Used in the next step (blind boxes and cards)
  blindBoxCost: 100,
  duplicateRefund: 10,
  // Blind box chances work like raffle tickets: EVERY card gets this many tickets, then one ticket is drawn.
  // So any one Common card is always more likely than any one Rare, any one Rare more likely than any one
  // Special, and any one Special more likely than any one Secret Rare, no matter how many cards are in each group.
  // With 8 / 4 / 2 / 1, each level is half as likely as the one before it.
  // The game works out and shows the real percentages by itself.
  // Trade duplicates with Lento: how many duplicates for one random card of that rarity
  trade: { rare: 5, special: 10 },
  // Complete a group of cards: bonus points (once per group). Complete ALL cards: a random card of this rarity.
  sets: { groupBonus: 500, allReward: "secretRare" },

  cardWeights: { common: 8, rare: 4, special: 2, secretRare: 1 },

  // Which Red List status makes which card rarity
  rarityByStatus: {
    secretRare: ["EX", "EW"],    // extinct (and extinct in the wild)
    special: ["CR", "EN"],       // critically endangered + endangered
    rare: ["VU", "NT"],          // vulnerable + near threatened
    common: ["LC", "DD", "NE"]   // least concern, data deficient, not evaluated
  }
};
