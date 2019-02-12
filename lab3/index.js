// Lab 3 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.

const functions = require('./functions');

let test = functions.firstNameMetrics();
test.then(function(result) {
        console.log(test);
}).catch(err => { console.log(err); });

