// Lab 3 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.

const functions = require('./functions');

let test = functions.getPersonById(0);
test.then(function(result) {
        console.log(test);
}).catch(err => { console.log(err); });

