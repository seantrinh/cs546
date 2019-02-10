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
	if (index < 0) { throw "Index out of bounds!"; }
	data = await getPeople();
	if (index >= data.data.length) {
		throw "Index out of bounds!";
	}
	return data.data[index].firstName + " " + data.data[index].lastName;
}

const lexIndex = function lexIndex(index) {

}

const firstNameMetrics = function firstNameMetrics() {

}

const shouldTheyGoOutside = function shouldTheyGoOutside(firstName, lastName) {

}

const whereDoTheyWork = function whereDoTheyWork(firstName, lastName) {

}

const findTheHacker = function findTheHacker(ip) {

}

let test = getPersonById(42);
test.then(function(result) {
	console.log(test);
}, (error) => { console.log("Error"); });
