//Lab 2 - CS 546
//I pledge my honor that I have abided by the Stevens Honor System.
const arrayUtils = require("./arrayUtils");

//Head Tests
try {
	const headOne = arrayUtils.head([2,3,4]);
	console.log('Head passed SUCCESSFULLY');
} catch (e) {
	console.error('Head FAILED test case');
}

try {
	const headTwo = arrayUtils.head(1234);
	console.error('Head DID NOT ERROR');
} catch (e) {
	console.log('Head failed SUCCESSFULLY');
}

//Last Tests
try {
	const tailOne = arrayUtils.last([1,2,3]);
	console.log('Tail passed SUCCESSFULLY');
} catch (e) {
	console.error('Tail FAILED test case');
}

try {
	const tailTwo = arrayUtils.last();
	console.error('Tail DID NOT ERROR');
} catch (e) {
	console.log('Tail failed SUCCESSFULLY');
}

//Remove Tests
try {

} catch (e) {

}

try {

} catch (e) {

}

//Range Tests
try {

} catch (e) {

}

try {

} catch (e) {

}



