import { createMeal } from "./module.js";

const button = document.getElementById("button");
const readyMeal = document.getElementById("generated-meal");

button.addEventListener("click", createMeal);
