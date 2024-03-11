const express = require("express");
const app = express();

require("dotenv").config();
const mongoose = require("mongoose");
const dbConnect = require("./config/database");

const PORT = process.env.PORT || 4000;

dbConnect();

app.listen(PORT, () => {
  console.log(`App is started at ${PORT}`);
});
