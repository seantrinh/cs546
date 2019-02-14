// Lab 3 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const axios = require('axios');
const peopleLink = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';
const weatherLink = 'https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json';

const getPeople = async function getPeople() {
        return await axios.get(peopleLink);
}

const getWeather = async function getWeather() {
        return await axios.get(weatherLink);
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


module.exports = {
        shouldTheyGoOutside
};
