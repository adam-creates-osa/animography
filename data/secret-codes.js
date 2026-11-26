// Developer secret codes for the mascot.
// The codes themselves are NOT written here, only their scrambled "hash", so people can't read them in the files.
// To make a new code: open tools/code-maker.html, type your code and prize, then paste the line it gives you below.
//
// reward options:  { points: 100 }   { card: "jaguar" }   { randomCard: "rare" }   { randomCard: "secretRare" }
// expires (optional): last day the code works, like "2027-01-31"
// Each code works once per player (per device and browser).
//
// RULES so the file keeps working:
//  - Every line ends with a comma EXCEPT the last one.
//  - All lines go BETWEEN  [  and  ];
window.SECRET_CODES = [
  // Example code: PURAVIDA → 50 points. Delete this line when you don't need it anymore.
  { hash: "78dce471fcd65f3b2ee616023e22f8dab65d9656159fc69884b033cc7122516f", reward: { points: 50 }, note: "Example: PURAVIDA" },
  { hash: "9011d5793ae867045db1739190018df8b13668a215e7ccea524ffb96e4ce8e94", reward: { points: 100 }, note: "Big points code 1" },
  { hash: "f03ceeab514aa84f43f9855485b6b6b544ae81f11330c1dd4633abc6e15fec4a", reward: { points: 100 }, note: "Big points code 2" }
];
