const { io } = require("socket.io-client");
const socket = io("ws://localhost:3000");
const syllables = ["B", "K", "L", "R", "Z", '-'];

let currentWord = "";

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
  "----------": ".", // adds period at end of sentence and new line
};

// Check if the current word is in the dictionary
const checkWord = () => {
  if (currentWord in dictionary) {    
    process.stdout.write(dictionary[currentWord]);
    // console.log(dictionary[currentWord])
    currentWord = "";
  }
};

// listen for messages from the server
syllables.forEach((s) => {
  socket.on(s, (...args) => {
    currentWord += s;
    checkWord();    
  });
});
