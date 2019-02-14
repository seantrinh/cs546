// Lab 3 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const axios = require('axios');
const peopleLink = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';

const getPeople = async function getPeople() {
        return await axios.get(peopleLink);
}

const getPersonById = async function getPersonById(id) {
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
        		return data.data[i].firstName + " " + data.data[i].lastName;
		}
	}
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

module.exports = {
        getPersonById,
        lexIndex,
        firstNameMetrics
};
