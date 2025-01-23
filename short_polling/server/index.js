const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
const data = {
  updatedTo: "not updated",
};

app.get("/", (req, res) => {
  res.send({
    time: new Date().getUTCMilliseconds(),
    data: data.updatedTo,
  });
});

app.get("/getData", (req, res) => {
  res.send("");
});

app.post("/updateData", (req, res) => {
  data.updatedTo = "updated";
  res.send({
    time: new Date().getUTCMilliseconds(),
    data: data.updatedTo,
  });
});

app.listen(PORT, () => {
  console.log("server is starting at port: ", PORT);
});
