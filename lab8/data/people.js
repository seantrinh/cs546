// Lab 8 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const axios = require('axios');

const getPersonById = async function getPersonById(id){
	if (id === undefined || isNaN(id) || !Number.isInteger(id)) {
		throw "Integer not provided!";
	}
	const {data} = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
	if (id <= 0 || id > data.length) {
		throw "Id out of bounds!";
	}
	return data[id - 1];
}

const search_name = async function search_name(name){
	const {data} = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
	var results = [];
	name = name.toLowerCase();
	let i = 0;
	for (i; i < data.length; i++){
		let person = data[i];
		let fullName = person.firstName + " " + person.lastName;
		fullName = fullName.toLowerCase();
		if (fullName.includes(name)){
			results.push(person);
		}
		if (results.length == 20){
			break;
		}
	}
	return results;
}

module.exports = {
	getPersonById,
	search_name
};
