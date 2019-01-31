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
	if (typeof string != "string" || string === undefined) {
		throw "Not a valid string!";
	}
	if (num < 0) { throw "Not a valid number!"; }
	else {
		if (num == 0 || string == "") { return ""; }
		if (num == 1) { return string; }
		let i = 1;
		const save = string;
		for (i; i < num; i++) {
			string = string + save;
		}
		return string;
	}
}

const countChars = function countChars(string) {
	if (typeof string != "string" || string === undefined) {
		throw "Not a valid string!";
	}
	else {
                const dict = { };
                let i = 0;
                for (i; i < string.length; i++) {
                        if (dict[string[i]]) { dict[string[i]] += 1; }
                        else { dict[string[i]] = 1; }
              	}
                return dict;
	}
}

module.exports = {
        capitalize,
	repeat,
	countChars
}; 
