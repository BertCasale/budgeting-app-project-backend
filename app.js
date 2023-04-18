const express = require("express");
const app = express();
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController.js");

app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
  res.send("Welcome to the Budget App");
});

app.get("*", (req, res) => {
  res.status(404).json({success: false, error: "The page you are looking for cannot be found or does not exist"});
});

module.exports = app;