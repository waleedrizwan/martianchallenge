const { io } = require("socket.io-client");
const socket = io("ws://localhost:3000");
const syllables = ['B', 'K', 'L', 'R', 'Z', "-"];

let currentWord = '';

// dont need to print every thing in real time
// just print out the translated 
// check if letter was received > 200ms ago, indicates "-" 

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
  "----------": ".",
};

const checkWord = () => {
  // Check if the current word is in the dictionary
  if (currentWord in dictionary) {
    // console.log(`Translated word: ${dictionary[currentWord]}`);
    process.stdout.write(dictionary[currentWord] + ' '); 
    currentWord = '';
  }

}

// socket.on always listening when running
syllables.forEach((s) => {
  socket.on(s, (...args) => {
    // console.log(`received   ${s}   at   ${new Date().getTime()}`);
    currentWord += s 
    checkWord();  
  });
});
