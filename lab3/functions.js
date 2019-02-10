// Lab 3 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const axios = require('axios');
const peopleLink = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';


const getPeople = async function getPeople() {
	return await axios.get(peopleLink);
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

const firstNameMetrics = function firstNameMetrics() {

}

const shouldTheyGoOutside = function shouldTheyGoOutside(firstName, lastName) {

}

const whereDoTheyWork = function whereDoTheyWork(firstName, lastName) {

}

const findTheHacker = function findTheHacker(ip) {

}

let test = lexIndex(2);
test.then(function(result) {
	console.log(test);
}).catch(err => { console.log(err); });
