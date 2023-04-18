const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Budget App");
});

app.get("*", (req, res) => {
  res.status(404).json({success: false, error: "The page you are looking for cannot be found"});
});

module.exports = app;