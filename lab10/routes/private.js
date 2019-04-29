// CS 546 - Lab 10
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require('express');
const router = express.Router();
const users = require("../data/users");

async function checkIfAuth(req, res, next) {
	const sid = req.session.id;
	let user = null;
	try {
		user = await users.getUserBySession(sid);
	} catch (e) {
		let data = {
                        title: "Error 403",
                        issue: "You are not logged in!"
                }
                res.render("error", data);
	}
}
//router.use(checkIfAuth);
router.get("/", async (req, res) => {
	const sid = req.session.id;
	let user = null;
	try {
		user = await users.getUserBySession(sid);
	} catch (e) {
		throw (e);
	}
	let auth = true;
	if (user == null) {
		auth = false;
	}
	let logMessage = "";
	if (auth) {
		let data = {
			title: "Your Info",
			user: user
		}
		res.render("private", data);
		logMessage = "[" + new Date().toUTCString() + "]: " + req.method + " " + req.originalUrl + " (Authenticated User)";
	}
	else {
		let data = {
			title: "Error 403",
			issue: "You are not logged in!"
		}
		res.render("error", data);
		logMessage = "[" + new Date().toUTCString() + "]: " + req.method + " " + req.originalUrl + " (Non-Authenticated User)";
	}
	console.log(logMessage);
});

module.exports = router;
