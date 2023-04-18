const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactionsModel.js");

//GET/READ
transactions.get("/", (req, res) => {
  res.status(203).json({success: true, data: transactionsArray});
});

transactions.get("/:index", (req, res) => {
  const {index} = req.params;

  if(transactionsArray[index]) {
    res.status(203).json({success: true, data: transactionsArray[index]});
  } else {
    res.status(404).json({succes: false, error: "The page you are looking for cannot be found or does not exist."});
  }
});

//POST/CREATE
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.status(203).json({success: true, data: transactionsArray[transactionsArray.length-1]});
});

//PUT/UPDATE
transactions.put("/:index", (req,res) => {
  const {index} = req.params;

  if (transactionsArray[index]) {
    transactionsArray[index] = req.body;
    res.status(203).json({success: true, data: transactionsArray[index]});
  } else {
    res.status(404).json({succes: false, error: "The page you are looking for cannot be found or does not exist."});
  }
});

//DELETE
transactions.delete("/:index", (req, res) => {
  const {index} = req.params;

  if (transactionsArray[index]) {
    const deletedtransactionsItem = transactionsArray.splice(index, 1);
    res.status(203).json({success: true, data: deletedtransactionsItem});
  } else {
    res.status(404).json({succes: false, error: "The page you are looking for cannot be found or does not exist."});
  }
});

module.exports = transactions;