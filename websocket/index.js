const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const PORT = 3000;

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Connection established!");

  socket.on("chat", (msg) => {
    console.log("message received");
    io.emit("chat", msg);
  });

  socket.on("disconnect", () => {
    console.log("disconnected!");
  });
});

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "./index.html"));
});

server.listen(PORT, () => {
  console.log("server is starting at port: ", PORT);
});
