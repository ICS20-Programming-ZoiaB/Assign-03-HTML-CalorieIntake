// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict"

// Function
function caloriesCalculate() {

// Get user input
  let totalCalories = parseFloat(document.getElementById("totalCalories").value);

// Calculation
  let protein = 0.2 * totalCalories;
  let carbohydrates = 0.55 * totalCalories;
  let proteinRounded = protein.toFixed(2);
  let carbohydratesRounded = carbohydrates.toFixed(2);

// Display results
  document.getElementById("results").innerHTML = "You should eat " + proteinRounded + " calories of protein and you should eat " + carbohydratesRounded + " calories of carbohydrates."
}