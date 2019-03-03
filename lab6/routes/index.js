// Lab 6 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const aboutRoutes = require("./about");
const educationRoutes = require("./education");
const storyRoutes = require("./story");

const constructorMethod = app => {
	app.use("/about",aboutRoutes);
	app.use("/education",educationRoutes);
	app.use("/story",storyRoutes);

	app.use("*", (req,res) => {
		res.status(404).json({ error: "Not found!" });
	});
};
