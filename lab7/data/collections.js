// CS 546 - Lab 7
// I pledge my honor that I have abided by the Stevens Honor System.
const dbConnection = require("./connection");

const getCollectionFn = collection => {
	let _col = undefined;

	return async() => {
		if (!_col) {
			const db = await dbConnection();
			_col = await db.collection(collection);
		}
		return _col;
	};
};

module.exports = {
	animals: getCollectionFn("animals"),
	posts: getCollectionFn("posts")
};
