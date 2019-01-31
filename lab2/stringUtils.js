//Lab 2 - CS 546
//I pledge my honor that I have abided by the Stevens Honor System.

const capitalize = function capitalize(string) {
	if (typeof string != "string" || string === undefined) {
		throw "Not a valid string!";
	}
	else {
		if (string == "") { return ""; }
		return string[0].toUpperCase() + string.slice(1).toLowerCase();
	}
}

const repeat = function repeat(string, num) {

}

const countChars = function countChars(string) {

}
