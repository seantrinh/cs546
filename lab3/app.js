// Lab 3 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.

const people = require("./people");
const weather = require("./weather");
const work = require("./work");

async function main() {
	try {
		const test1 = await people.getPersonById(43);
		if (test1 == "Brew Peat") {
			console.log("Success");
		}
		else { console.log("Failure"); }
	} catch(e) {
		console.log(e);
	}

	try {
		const test2 = await people.lexIndex(2);
		if (test2 == "Dermot Abberley") {
			console.log("Success");
		}
		else { console.log("Failure"); }
	} catch(e) {
		console.log(e);
	}

	try {
		const test3 = await people.firstNameMetrics();
		console.log("Success");
	} catch(e) {
		console.log(e);
	}
}

//call main
main()

