// CS 546 - Lab 8
// I pledge my honor that I have abided by the Stevens Honor System.
const searchRoutes = require("./search");
const detailsRoutes = require("./details");
const path = require("path");

const constructorMethod = app => {
	app.use("/search", searchRoutes);
	app.use("/details", detailsRoutes);
	app.get("/", (req, res) => {
		res.sendFile(path.resolve("static/home.html"));
	});
	app.use("*", (req, res) => {
		res.sendStatus(404);
	});
};

module.exports = constructorMethod;
