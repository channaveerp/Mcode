// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for chat messages
  socket.on("chatMessage", (msg) => {
    console.log("Message received: ", msg);
    io.emit("chatMessage", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
