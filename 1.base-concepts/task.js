"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant === 0) {
		arr.push(-b / (2 * a));
	} else if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
	}

	return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthPercentСoefficient = percent / 100 / 12;
	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (monthPercentСoefficient + monthPercentСoefficient / (Math.pow((1 + monthPercentСoefficient), countMonths) - 1));
	let totalAmount = monthlyPayment * countMonths;
	return +totalAmount.toFixed(2);
}

