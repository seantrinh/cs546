// Lab 3 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const axios = require('axios');
const peopleLink = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';
const weatherLink = 'https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json';
const workLink = 'https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json';

const getPeople = async function getPeople() {
	return await axios.get(peopleLink);
}

const getWeather = async function getWeather() {
	return await axios.get(weatherLink);
}

const getWork = async function getWork() {
	return await axios.get(workLink);
}

const getPersonById = async function getPersonById(index) {
	if (isNaN(index) || !Number.isInteger(index) || index === undefined) {
		throw "Integer not provided!";
	}
	data = await getPeople();
	if (index < 0 || index >= data.data.length) {
		throw "Index out of bounds!";
	}
	return data.data[index].firstName + " " + data.data[index].lastName;
}

const lexIndex = async function lexIndex(index) {
	if (isNaN(index) || !Number.isInteger(index) || index === undefined) {
		throw "Integer not provided!";
	}
	data = await getPeople();
	if (index < 0 || index >= data.data.length) {
		throw "Index out of bounds!";
	}
	data.data.sort(function(a,b){return a.lastName.localeCompare(b.lastName);});
	return data.data[index].firstName + " " + data.data[index].lastName;
}

const firstNameMetrics = async function firstNameMetrics() {
	data = await getPeople();
	let totalLetters = 0;
	let totalVowels = 0;
	let totalConsonants = 0;
	let longestName = data.data[0].firstName;
	let shortestName = data.data[0].firstName;
	let i = 0;
	for (i; i < data.data.length; i++) {
		if (data.data[i].firstName.length > longestName.length) {
			longestName = data.data[i].firstName;
		}
		if (data.data[i].firstName.length < shortestName.length) {
			shortestName = data.data[i].firstName;
		}
		totalLetters += data.data[i].firstName.length;
		let j = 0;
		for (j; j < data.data[i].firstName.length; j++) {
			let letter = data.data[i].firstName[j].toLowerCase();
			if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
				totalVowels += 1;
			}
			else { totalConsonants += 1; }
		}
	}
	return {totalLetters, totalVowels, totalConsonants, longestName, shortestName};
}

const shouldTheyGoOutside = async function shouldTheyGoOutside(firstName, lastName) {
	if (typeof firstName != "string" || firstName === undefined || typeof lastName != "string" || lastName === undefined) {
		throw "Valid first name and/or last name not provided!";
	}
	data = await getPeople();
	let i = 0;
	let zipCode = undefined;
	for (i; i < data.data.length; i++) {
		if (data.data[i].firstName == firstName && data.data[i].lastName == lastName) {
			zipCode = data.data[i].zip;
			break;
		}
	}
	if (!zipCode) { throw "Person does not exist!"; }
	weatherData = await getWeather();
	let j = 0;
	for (j; j < weatherData.data.length; j++) {
		if (weatherData.data[j].zip == zipCode) {
			if (weatherData.data[j].temp >= 34) {
				return "Yes, " + firstName + " should go outside.";
			}
			else {
				return "No, " + firstName + " should not go outside.";
			}
		}
	}
}

const whereDoTheyWork = async function whereDoTheyWork(firstName, lastName) {
	if (typeof firstName != "string" || firstName === undefined || typeof lastName != "string" || lastName === undefined) {
                throw "Valid first name and/or last name not provided!";
        }
	data = await getPeople();
	let i = 0;
        let social = undefined;
        for (i; i < data.data.length; i++) {
                if (data.data[i].firstName == firstName && data.data[i].lastName == lastName) {
                        social = data.data[i].ssn;
                        break;
                }
        }
	if (!social) { throw "Person does not exist!"; }
	workData = await getWork();
	let j = 0;
	for (j; j < workData.data.length; j++) {
		if (workData.data[j].ssn == social) {
			if (workData.data[j].willBeFired) {
				return firstName + " " + lastName + " - " + workData.data[j].jobTitle +
				" at " + workData.data[j].company + ". They will be fired.";
			}
			else {
				return firstName + " " + lastName + " - " + workData.data[j].jobTitle +
				" at " + workData.data[j].company + ". They will not be fired.";
			}
		}
	}	
}

const findTheHacker = async function findTheHacker(ip) {
	if (typeof ip != "string" || ip === undefined) {
		throw "Valid IP not provided!";
	}
	workData = await getWork();
	let i = 0;
	let social = undefined;
	for (i; i < workData.data.length; i++) {
		if (workData.data[i].ip == ip) {
			social = workData.data[i].ssn;
			break;
		}
	}
	if (!social) { throw "IP does not exist!"; }
	data = await getPeople();
	let j = 0;
	for (j; j < data.data.length; j++) {
		if (data.data[j].ssn == social) {
			return data.data[j].firstName + " " + data.data[j].lastName + " is the hacker!";
		}
	}
}

//let test = findTheHacker();
//test.then(function(result) {
//	console.log(test);
//}).catch(err => { console.log(err); });
