// Animography game rules. Change any number here and the game follows it.
window.GAME_RULES = {
  questionsPerRound: 10,     // questions in one trivia round
  statusQuestionsPerRound: 3, // how many of those are "What is this animal's status?" questions
  pointsPerCorrect: 10,      // points for each right answer
  streakLength: 3,           // right answers in a row needed for a bonus...
  streakBonus: 5,            // ...and how many bonus points it gives

  // Used in the next step (blind boxes and cards)
  blindBoxCost: 100,
  duplicateRefund: 10,
  odds: { common: 70, rare: 25, secretRare: 5 }, // percent

  // Which Red List status makes which card rarity
  rarityByStatus: {
    secretRare: ["EX", "EW"],  // extinct animals
    rare: ["CR", "EN"],        // critically endangered + endangered
    common: ["VU", "NT", "LC", "DD", "NE"] // everyone else
  }
};
