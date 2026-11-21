// Saves the player's progress in this browser (no account needed).
// Note: it stays on this one device and browser.
const SAVE_KEY = "animography.save.v1";

const DEFAULT_SAVE = {
  points: 0,        // points to spend on blind boxes
  totalEarned: 0,   // all points ever earned
  bestScore: 0,     // most correct answers in one round
  bestPoints: 0,    // most points in one round
  rounds: [],       // last 20 rounds: { date, correct, total, points }
  favorites: [],    // animal ids
  cards: {}         // collectible cards: { animalId: how many copies }
};

const Store = {
  load() {
    try {
      const data = JSON.parse(localStorage.getItem(SAVE_KEY));
      return { ...DEFAULT_SAVE, ...(data || {}) };
    } catch (e) {
      return { ...DEFAULT_SAVE };
    }
  },

  save(data) {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); }
    catch (e) { /* storage blocked (e.g. private mode): progress won't be kept */ }
  },

  addRound(correct, total, points) {
    const d = this.load();
    d.points += points;
    d.totalEarned += points;
    d.bestScore = Math.max(d.bestScore, correct);
    d.bestPoints = Math.max(d.bestPoints, points);
    d.rounds = [{ date: new Date().toISOString(), correct, total, points }, ...d.rounds].slice(0, 20);
    this.save(d);
    return d;
  },

  // Spend points on a blind box and add the card. Returns null if not enough points.
  openBox(cost, animalId, refund) {
    const d = this.load();
    if (d.points < cost) return null;
    d.points -= cost;
    const duplicate = (d.cards[animalId] || 0) > 0;
    d.cards[animalId] = (d.cards[animalId] || 0) + 1;
    if (duplicate) d.points += refund;
    this.save(d);
    return { duplicate, save: d };
  },

  isFavorite(id) { return this.load().favorites.includes(id); },

  toggleFavorite(id) {
    const d = this.load();
    d.favorites = d.favorites.includes(id)
      ? d.favorites.filter(x => x !== id)
      : [...d.favorites, id];
    this.save(d);
    return d.favorites.includes(id);
  }
};
