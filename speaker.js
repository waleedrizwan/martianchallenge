const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// For Testing
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
  "-----",
  "----------",
];

const syllables = ["B", "K", "L", "R", "Z", "-"];

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

setInterval(
  () => {
    const s = syllables[Math.floor(Math.random() * syllables.length)];

    // io.emit(s, {});
    // console.log("Emitting ", s);

    // For Testing
    words.forEach((word) => {
      setTimeout(() => {
        word.split("").forEach((char) => {
          io.emit(char, {});
        });
      }, 100);
    });
    // end of testing block
  },
  // delay in milliseconds
  200
);


