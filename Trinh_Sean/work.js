// Lab 3 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const axios = require('axios');
const peopleLink = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';

const workLink = 'https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json';

const getPeople = async function getPeople() {
        return await axios.get(peopleLink);
}

const getWork = async function getWork() {
        return await axios.get(workLink);
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

module.exports = {
        whereDoTheyWork,
        findTheHacker
};
