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

}
