// CS 546 - Lab 10
// I pledge my honor that I have abided by the Stevens Honor System.
const landingRoute = require("./landing");
const loginRoute = require("./login");
const privateRoute = require("./private");
const logoutRoute = require("./logout");

function constructorMethod(app) {
	app.use("/", landingRoute);
	app.use("/login", loginRoute);
	app.use("/private", privateRoute);
	app.use("/logout", logoutRoute);
	
	app.use("*", (req, res) => {
		res.redirect("/");
	});
}

module.exports = constructorMethod;

