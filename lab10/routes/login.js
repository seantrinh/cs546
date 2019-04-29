// CS 546 - Lab 10
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require('express');
const router = express.Router();
const users = require("../data/users");
const uuid = require("uuid/v4");

router.post("/", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	let auth = false;
	let err = "Did not provide a valid username/password.";
	try {
		auth = await users.validate(username, password);
	} catch (e) {
		err = e;
	}

	if (auth) {
		const sid = uuid();
		res.cookie("AuthCookie", sid);
		try {
			await users.addSession(un, sid);
		} catch (e) {
			throw(e);
		}
		res.redirect("/private");
	}
	else {
		res.render("root", {title: "Login Screen", error: err});
	}
});

module.exports = router;
