// CS 546 - Lab 10
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require('express');
const router = express.Router();
const users = require("../data/users");

var checkIfAuth = async function (req, res, next) {
	const sid = req.session.id;
	let user = null;
	try {
		user = await users.getUserBySession(sid);
		next();
	} catch (e) {
		let data = {
                        title: "Error 403",
                        issue: "You are not logged in!"
                }
                res.render("error", data);
		let logMessage = "[" + new Date().toUTCString() + "]: " + req.method + " " + req.originalUrl + " (Non-Authenticated User)";
		console.log(logMessage);
	}
}
router.use(checkIfAuth);
router.get("/", async (req, res) => {
	let user = await users.getUserBySession(req.session.id);
	let data = {
		title: "Your Info",
		user: user
	}
	res.render("private", data);
	let logMessage = "[" + new Date().toUTCString() + "]: " + req.method + " " + req.originalUrl + " (Authenticated User)";
	console.log(logMessage);
});

module.exports = router;
