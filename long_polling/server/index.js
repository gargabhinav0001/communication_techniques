const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());

const waitingClients = [];
const lastData = {
  note: "last cached data",
};

app.get("/", (req, res) => {
  if (lastData.note !== req.query.lastData) {
    res.send({
      message: "Success",
      newData: lastData.note,
    });
  } else {
    waitingClients.push(res);
  }
});

app.post("/updateData", (req, res) => {
  if (lastData.note !== req.query.lastData) {
    lastData.note = req.query.lastData;

    while (waitingClients.length > 0) {
      const client = waitingClients.pop();
      client.json({
        message: "Got updated data",
        newData: lastData.note,
      });
      res.send({
        message: "Data updated successfully.",
        newData: lastData.note,
      });
    }
  } else {
    res.send({
      message: "No updates, Duplicate data sent!",
    });
  }
});

app.get("/getData", (req, res) => {
  res.send("");
});

app.listen(PORT, () => {
  console.log("server is starting at port: ", PORT);
});
