// Developer secret codes for the mascot.
// The codes themselves are NOT written here, only their scrambled "hash", so people can't read them in the files.
// To make a new code: open tools/code-maker.html, type your code and prize, then paste the line it gives you below.
//
// reward options:  { points: 100 }   { card: "jaguar" }   { randomCard: "rare" }   { randomCard: "secretRare" }
// expires (optional): last day the code works, like "2027-01-31"
// Each code works once per player (per device and browser).
window.SECRET_CODES = [
  // Example code: PURAVIDA → 50 points. Delete this line when you don't need it anymore.
  { hash: "78dce471fcd65f3b2ee616023e22f8dab65d9656159fc69884b033cc7122516f", reward: { points: 50 }, note: "Example: PURAVIDA" },
   {"hash": "5b6370b04e9b72dece4a6bb5e47ce67ba660fb0971eba1112b51603a157e8172", "reward": {"card": "caribbean-monk-seal"}, "expires": "2026-12-25", "note": "Christmas gift!"},
   {"hash": "2a425336733ee621bef3edd292cc1d2475d5e780afb3d1a457999fe7dfb1434e", "reward": {"card": "golden-toad"}, "expires": "2026-12-25", "note": "Christmas gift!"},
  {"hash": "9011d5793ae867045db1739190018df8b13668a215e7ccea524ffb96e4ce8e94", "reward": { "points": 100 }, "expires": "2026-12-25", "note": "Christmas gift!"},
];
