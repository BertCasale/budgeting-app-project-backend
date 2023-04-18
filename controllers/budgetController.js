const express = require("express");
const budget = express.Router();
const budgetArray = require("../models/budgetModel.js");

//GET/READ
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

//POST/CREATE
budget.post("/", (req, res) => {
  budgetArray.push(req.body);
  res.status(203).json({success: true, data: budgetArray[budgetArray.length-1]});
});

//PUT/UPDATE
budget.put("/:index", (req,res) => {
  const {index} = req.params;

  if (budgetArray[index]) {
    budgetArray[index] = req.body;
    res.status(203).json({success: true, data: budgetArray[index]});
  } else {
    res.status(404).json({succes: false, error: "The page you are looking for cannot be found or does not exist."});
  }
});

//DELETE
budget.delete("/:index", (req, res) => {
  const {index} = req.params;

  if (budgetArray[index]) {
    const deletedBudgetItem = budgetArray.splice(index, 1);
    res.status(203).json({success: true, data: deletedBudgetItem});
  } else {
    res.status(404).json({succes: false, error: "The page you are looking for cannot be found or does not exist."});
  }
});

module.exports = budget;