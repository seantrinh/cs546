// CS 546 - Lab 7
// I pledge my honor that I have abided by the Stevens Honor System.
const animalRoutes = require("./animals");
const postRoutes = require("./posts");
const likeRoutes = require("./likes");

const constructorMethod = app => {
	app.use("/animals", animalRoutes);
	app.use("/posts", postRoutes);
	app.use("/likes", likeRoutes);

	app.use("*", (req, res) => {
		res.status(404).json({ error: "Not found!" });
	});
});

module.exports = constructorMethod;
