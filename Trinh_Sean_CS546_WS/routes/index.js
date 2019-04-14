const constructorMethod = app => {
	app.use("/", (req, res) => {
		res.render("prime",
		{ title: "The Prime Number Checker!" })
	});
	app.use("*", (req, res) => {
		res.status(404).json({ error: "Not found!" });
	});
};

module.exports = constructorMethod;
