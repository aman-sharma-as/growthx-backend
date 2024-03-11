const express = require("express");
const app = express();

require("dotenv").config();
const dbConnect = require("./config/database");

const PORT = process.env.PORT || 4000;

dbConnect();

app.get("/", (req, res) => {
  res.send("<h1>HomePage</h1>");
});

app.listen(PORT, () => {
  console.log(`App is started at ${PORT}`);
});
