const axios = require('axios');
const peopleLink = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';

module.exports = {
	async getPeople() {
		return await axios.get(peopleLink);
	},
	async get(id) {
		if (isNaN(id) || !Number.isInteger(id) || id === undefined) {
			throw "Integer not provided!";
		}
		data = await getPeople();
		if (id <= 0 || id > data.data.length) {
			throw "Index out of bounds!";
		}
		let i = 0;
		for (i; i < data.data.length; i++) {
			if (data.data[i].id == id) {
				return data.data[i];
			}
		}
		throw "ID does not exist!";
	},
	async search(name) {
		data = await getPeople();
		var result = [];
		name = name.toLowerCase();
		let i = 0;
		for (i; i < data.data.length; i++) {
			let person = data.data[i];
			let fullName = person.firstName + " " + person.lastName;
			fullName = name.toLowerCase();
			if (fullName.includes(name)) {
				result.push(person);
			}
		}
		return result;
	}
};
