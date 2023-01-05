const { io } = require("socket.io-client");
const socket = io("ws://localhost:3000");
const syllables = ["B", "K", "L", "R", "Z"];

let currentWord = "";
let lastReceivedTime = Date.now();
const syllableDuration = 100; // duration of one syllable in milliseconds

// Martian words and their translations
const dictionary = {
  "B--B-K---Z": "food",
  BBKZ: "vomit",
  "B-K-RKK---ZZZ": "sleep",
  "BKR-KK-ZZZ": "philosophy",
  "ZZ-KK": "need",
  "KK-ZZ": "hate",
  "L-R-Z": "I",
  "Z-R-L": "you",
  ZZKK: "rejoice",
  "-----": " ", // space between words
  "----------": ".\n", // adds period at end of sentence and new line
};

// Check if the current word is in the dictionary
const checkWord = () => {
  if (currentWord in dictionary) {
    console.log(`Translated word: ${dictionary[currentWord]}`);
    process.stdout.write(dictionary[currentWord] + " ");
    currentWord = "";
  }
};

// listen for messages from the server
syllables.forEach((s) => {
  socket.on(s, (...args) => {
    // console.log(`received   ${s}   at   ${Date.now()}`);

    const currentTime = Date.now();
    const elapsedTime = currentTime - lastReceivedTime;
    lastReceivedTime = currentTime;
    for (let i = 0; i < elapsedTime / syllableDuration; i++) {
      currentWord += "-";
    }
    currentWord += s;
    checkWord();
    console.log(`current word ${currentWord}`);
  });
});
