//Lab 2 - CS 546
//I pledge my honor that I have abided by the Stevens Honor System.

const head = function head(arr) {
        //Returns the head of the array
	if (!Array.isArray(arr) || !arr.length) { throw "Not a valid array!"; }
	else { return arr[0]; }
}

const last = function last(arr) {
	//Returns the last element of the array
	if (!Array.isArray(arr) || !arr.length) { throw "Not a valid array!"; }
	else { return arr[arr.length - 1]; }
}

const remove = function remove(arr,index) {
	//Removes the element at the specified index
	if (!Array.isArray(arr) || !arr.length) { throw "Not a valid array!"; }
	if (index < 0 || index >= arr.length) { throw "Index out of bounds!"; }
	else {
		arr.splice(index, 1);
		return arr;
	}
}

const range = function range(end,value) {
	if (isNaN(end) || !Number.isInteger(end) || end <= 0) {
		throw "Not a valid number!";
	}
	let arr = [];
	let i = 0;
	if (value) {
		for (i; i < end; i++) { arr[i] = value; }
	}
	else {
		for (i; i < end; i++) { arr[i] = i; }
	}
	return arr;
}

const countElements = function countElements(arr) {
	if (!Array.isArray(arr) || arr === undefined) { throw "Not a valid array!"; }
	else {
		const dict = { };
		let i = 0;
		for (i; i < arr.length; i++) {
			if (dict[arr[i]]) { dict[arr[i]] += 1; }
			else { dict[arr[i]] = 1; }
		}
		return dict;
	}
}

const isEqual = function isEqual(arrayOne,arrayTwo) {

}
