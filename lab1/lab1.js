//Lab 1 - CS 546
//I pledge my honor that I have abided by the Stevens Honor System.

const questionOne = function questionOne(arr) {
	//Calculates sum of squares
	let i = 0;
	let sum = 0;
	for (i; i < arr.length; i++) {
		sum += Math.pow(arr[i],2);
	}
	return sum;
}

const questionTwo = function questionTwo(num) {
	//Finds the 'num'th fibonacci number 
	if (num == 0) { return 0; }
	if (num == 1) { return 1; }
	let first = 0;
	let second = 1;
	let index = 2;
	let save = 0;
	while (true) {
		if (num == index) {
			return first + second;
		}
		else {
			save = second;
			second = first + second;
			first = save;
			index += 1;
		}
	}
}

const questionThree = function questionThree(text) {
	//Returns the number of vowels in a string
	let revisedText = text.toLowerCase();
	let sum = 0;
	let i = 0;
	let test = '';
	for (i; i < revisedText.length; i++) {
		test = revisedText.charAt(i);
		if (test == 'a' || test == 'e' || test == 'i' || test == 'o' || test == 'u') {
			sum += 1;
		}
	}
	return sum;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
}

module.exports = {
    firstName: "Sean", 
    lastName: "Trinh", 
    studentId: "10416232",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
