//Lab 2 - CS 546
//I pledge my honor that I have abided by the Stevens Honor System.

const extend = function extend(...args) {
	if (args.length < 2) {
		throw "Number of arguments must be at least 2!";
	}
	else {
		let i = 0;
		let obj = {};
		for (i; i < args.length; i++) {
			if (typeof args[i] != "object" || args[i] === undefined) {
				throw "An invalid argument encountered!";
			}
			for (var attr in args[i]) {
				if (!obj.hasOwnProperty(attr)) {
					obj[attr] = args[i][attr];
				}
			}
		}
		return obj;
	}
}

const smush = function smush(...args) {
	if (args.length < 2) {
		throw "Number of arguments must be at least 2!";
	}
	else {
		let i = 0;
		let obj = {};
		for (i; i < args.length; i++) {
			if (typeof args[i] != "object" || args[i] === undefined) {
				throw "An invalid argument encountered!";
			}
			for (var attr in args[i]) {
				obj[attr] = args[i][attr];
			}
		}
		return obj;
	}
}

const mapValues = function mapValues(object, func) {
	if (typeof object != "object" || object === undefined) {
		throw "First argument not an object!";
	}
	if (typeof func !=  "function" || func === undefined) {
		throw "Second argument must be a valid function!";
	}
	else {
		let i = 0;
		for (var attr in object) {
			try { object[attr] = func(object[attr]); }
			catch(e) { throw "Type mismatch!"; }
		}
		return object;
	}
}
