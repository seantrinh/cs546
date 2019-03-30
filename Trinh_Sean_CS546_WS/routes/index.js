// Lab 8 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const search = require("./search");
const details = require("./details");
const path = require("path");

const constructorMethod = app =>{
	app.get("/", (req, res) => {
		res.sendFile(path.resolve("static/index.html"));
	});
	app.use("/search", search);
	app.use("/details", details);
	
	app.use("*", (req,res) => {
		 res.sendStatus(404);
	});
}
module.exports = constructorMethod;
