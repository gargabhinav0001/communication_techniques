const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const payload = req.body;
  console.log("Webhook payload is ", payload);
  // perform different scenarious you can or queue your tasks and from there you trigger
  // some events in order to notify users
  res.status(200).send("Webhook received successfully!");
});
app.listen(PORT, () => {
  console.log("Server started at PORT : ", PORT);
});
