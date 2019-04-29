// CS 546 - Lab 10
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require('express');
const router = express.Router();
const users = require("../data/users");

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
	if (auth) {
		let data = {
			title: "Your Info",
			user: user
		}
		res.render("private", data);
	}
	else {
		let data = {
			title: "Error 403",
			issue: "You are not logged in!"
		}
		res.render("error", data);
	}
});

module.exports = router;
