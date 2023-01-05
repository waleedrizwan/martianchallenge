const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

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

// For Testing
const sentence1 = [
  "L-R-Z",
  "-----",
  "ZZ-KK",
  "-----",
  "B--B-K---Z",
  "----------",
]; // I need food.
const sentence2 = [
  "L-R-Z",
  "-----",
  "ZZ-KK",
  "-----",
  "B-K-RKK---ZZZ",
  "----------",
]; // I need sleep.
const sentence3 = ["L-R-Z", "-----", "KK-ZZ", "-----", "Z-R-L", "----------"]; // I hate you.

const testList = [sentence1, sentence2, sentence3];

setInterval(
  () => {
    testList.forEach((sentence) => {
      sentence.forEach((word) => {
        setTimeout(() => {
          word.split("").forEach((char) => {
            io.emit(char, {});
          });
        }, 100);
      });
    });
  },
  // delay in milliseconds
  10000
);
