const express = require("express");
const app = express();
const cors = require("cors");
const budgetController = require("./controllers/budgetController.js");

app.use(express.json());
app.use(cors());

app.use("/budget", budgetController);

app.get("/", (req, res) => {
  res.send("Welcome to the Budget App");
});

app.get("*", (req, res) => {
  res.status(404).json({success: false, error: "The page you are looking for cannot be found or does not exist"});
});

module.exports = app;