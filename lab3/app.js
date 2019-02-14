// Lab 3 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.

const people = require("./people");
const weather = require("./weather");
const work = require("./work");

async function main() {
	try {
		const test1 = await people.getPersonById(43);
		console.log(test1);
	} catch(e) {
		console.log(e);
	}
}

//call main
main()

