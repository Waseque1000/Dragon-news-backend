const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const catagories = require("./Data/Catagories.json");

app.get("/", (req, res) => {
  res.send("Dragon News");
});

//?
app.use(cors());

// ! catagoies data
app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.listen(port, () => {
  console.log(`dragon api is running port :${port}`);
});
