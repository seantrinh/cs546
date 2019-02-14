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

	try {
		const test4 = await weather.shouldTheyGoOutside("Scotty","Barajaz");
		if (test4 == "Yes, Scotty should go outside.") {
			console.log("Success");
		}
		else { console.log("Failure"); }
	} catch(e) {
		console.log(e);
	}
	
	try {
		const test5 = await weather.shouldTheyGoOutside("Calli", "Ondrasek");
		if (test5 == "No, Calli should not go outside.") {
			console.log("Success");
		}
		else { console.log("Failure"); }
	} catch(e) {
		console.log(e);
	}

	try {
		const test6 = await work.whereDoTheyWork("Demetra","Durrand");
		if (test6 == "Demetra Durrand - Nuclear Power Engineer at Buzzshare. They will be fired.") {
			console.log("Success");
		}
		else { console.log("Failure"); }
	} catch(e) {
		console.log(e);
	}

	try {
		const test7 = await work.whereDoTheyWork("Hank","Tarling");
		if (test7 == "Hank Tarling - Technical Writer at Babbleblab. They will not be fired.") {
			console.log("Success");
		}
		else { console.log("Failure"); }
	} catch(e) {
		console.log(e);
	}
	
	try {
		const test8 = await work.findTheHacker("79.222.167.180");
		if (test8 == "Robert Herley is the hacker!") {
			console.log("Success");
		}
		else { console.log("Failure"); }
	} catch(e) {
		console.log(e);
	}
}

//call main
main()

