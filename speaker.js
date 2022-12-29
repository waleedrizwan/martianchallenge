const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

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

// testing
const words = [
  "B--B-K---Z",
  "BBKZ",
  "B-K-RKK---ZZZ",
  "BKR-KK-ZZZ",
  "ZZ-KK",
  "KK-ZZ",
  "L-R-Z",
  "Z-R-L",
  "ZZKK",
  "----------"

];

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

const syllables = ["B", "K", "L", "R", "Z", "-"];

setInterval(() => {
  
  // const s = syllables[Math.floor(Math.random() * syllables.length)];
  // console.log('Emitting ', s);

  // if (s != '-') {
  //   io.emit(s, {});
  // }

  // io.emit(s, {})

  // For Testing 
  words.forEach((word) => {
    setTimeout(() => {
      word.split("").forEach((char) =>  {
        io.emit(char, {})
      });

    }, 100);

          
  });
}, 200);
