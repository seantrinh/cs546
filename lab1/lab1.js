//Lab 1 - CS 546
//I pledge my honor that I have abided by the Stevens Honor System.

const questionOne = function questionOne(arr) {
	//Calculates sum of squares
	var i;
	var sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += Math.pow(arr[i],2);
	}
	return sum;
}

const questionTwo = function questionTwo(num) { 
	if (num == 0) { return 0; }
	if (num == 1) { return 1; }
	var first = 0;
	var second = 1;
	var index = 2;
	var save;
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
    // Implement question 3 here
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
