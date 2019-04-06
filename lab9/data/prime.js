// CS 546 - Lab 9
// I pledge my honor that I have abided by the Stevens Honor System.

let exportedMethods = {
	isPrime(num1) {
		if (num1 === undefined || isNaN(num1) || !Number.isInteger(num1)) throw "Please provide a valid integer!";
		if (num1 <= 1) return false;
		if (num1 <= 3) return true;
		let i = 2;
		for (i; i <= Math.sqrt(num1); i++) {
			if (num1 % i == 0) return false;
		}
		return true;
	}
};

module.exports = exportedMethods;
