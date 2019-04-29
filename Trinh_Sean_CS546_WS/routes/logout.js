// CS 546 - Lab 10
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require('express');
const router = express.Router();
const users = require("../data/users");

router.get("/", async (req, res) => {
	const sid = req.session.id;
	res.cookie("AuthCookie", "", {expires: new Date()});
	res.clearCookie("AuthCookie");
	await users.deleteSession(sid);
	res.render("logout", {title: "Logged out"});
	let logMessage = "[" + new Date().toUTCString() + "]: " + req.method + " " + req.originalUrl + " (Authenticated User)";
	console.log(logMessage);
});

module.exports = router;
