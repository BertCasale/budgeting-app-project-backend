const express = require("express");
const budget = express.Router();
const budgetArray = require("../models/budgetModel.js");

budget.get("/", (req, res) => {
  res.status(203).json({success: true, data: budgetArray});
});

budget.get("/:index", (req, res) => {
  const {index} = req.params;

  if(budgetArray[index]) {
    res.status(203).json({success: true, data: budgetArray[index]});
  } else {
    res.status(404).json({succes: false, error: "The page you are looking for cannot be found or does not exist."});
  }
});

module.exports = budget;