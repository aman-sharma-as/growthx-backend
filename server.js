// Importing all external dependencies
const express = require("express");
const app = express();
require("dotenv").config();

// Importing all internal dependencies
const dbConnect = require("./config/database");

// Adding body parser middleware
app.use(express.json());

// Defining the port
const PORT = process.env.PORT || 4000;

// Calling the connection function
dbConnect();

// Default route
app.get("/", (req, res) => {
  res.send("<h1>HomePage</h1>");
});

// Initiating App
app.listen(PORT, () => {
  console.log(`App is started at ${PORT}`);
});
