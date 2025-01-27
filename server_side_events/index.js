const express = require("express");
const { join } = require("node:path");
const cors = require("cors");

const PORT = 3000;

const app = express();

app.use(
  cors({
    origin: "*", // Allow all origins (for testing purposes)
  })
);
app.options("*", cors()); // Enable pre-flight across-the-board

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "./index.html"));
});

app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Cache-Control", "no-cache");

  // Send a welcome message to the client
  res.write(`data: Welcome to server-sent events\n\n`);

  const intervalId = setInterval(() => {
    const randomValue = Math.random().toFixed(3); // Generate a random value
    res.write(`data: sending updated response ${randomValue}\n\n`);
  }, 1000);

  res.on("close", () => {
    clearInterval(intervalId);
  });
});
app.listen(PORT, () => {
  console.log("server is starting at port: ", PORT);
});
