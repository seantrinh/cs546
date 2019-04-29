// CS 546 - Lab 10
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require('express');
const router = express.Router();
const users = require("../data/users");

router.post("/", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	let auth = false;
	let err = "Did not provide a valid username/password.";
	try {
		auth = await users.validate(username, password);
	} catch (e) {
		res.sendStatus(401);
		err = e;
	}
	let logMessage = "";
	if (auth) {
		try {
			await users.addSession(username, req.session.id);
		} catch (e) {
			throw(e);
		}
		res.redirect("/private");
		logMessage = "[" + new Date().toUTCString() + "]: " + req.method + " " + req.originalUrl + " (Authenticated User)";
	}
	else {
		res.render("root", {title: "Login Screen", error: err});
		logMessage = "[" + new Date().toUTCString() + "]: " + req.method + " " + req.originalUrl + " (Non-Authenticated User)";
	}
	console.log(logMessage);
});

module.exports = router;
