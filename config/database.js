const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

const dbConnect = () => {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("DB is connected");
    })
    .catch((error) => {
      console.log("Error in DB Connection:", error);
      process.exit(1);
    });
};

module.exports = dbConnect;
