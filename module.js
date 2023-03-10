/** @format */

function generateRandomNumber(num) {
	// Gets # from 0 -> num - 1
	return Math.floor(Math.random() * num);
}

const mealPrep = {
	mainMeal: ["fish", "burger", "hot dog", "tortilla"],
	adds: ["chips", "potatoes", "rice", "grilled veggies", "salad"],
	drink: ["water", "coke", "fanta", "sprite"],
};

// Store the 'wisdom' in an array
function createMeal() {
	let readyMeal = [];
	// Iterate over the object
	for (let meal in mealPrep) {
		let optionIdx = generateRandomNumber(mealPrep[meal].length);
		// use the object's properties to customize the message being added to personalWisdom
		switch (meal) {
			case "mainMeal":
				readyMeal.push(
					`For the main course you should have a <b>${mealPrep[meal][optionIdx]}</b>. 🍔`
				);
				break;
			case "adds":
				readyMeal.push(
					`You should get <b>${mealPrep[meal][optionIdx]}</b> for adds. 🍟`
				);
				break;
			case "drink":
				readyMeal.push(
					`You should get <b>${mealPrep[meal][optionIdx]}</b> to drink. 🥤`
				);
				break;
			default:
				readyMeal.push("There is not enough info.");
		}
	}
	console.log(readyMeal);
	let yourMeal = readyMeal.join("<br>");
	document.getElementById("generated-meal").innerHTML = yourMeal;
	return yourMeal;
}

export { createMeal };
