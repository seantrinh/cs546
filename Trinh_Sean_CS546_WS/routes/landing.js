// CS 546 - Lab 10
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require('express');
const router = express.Router();
const users = require("../data/users")

router.get('/', async (req, res) => {
	let auth = false;
    	try {
		//auth = await users.getUserBySession(req.cookies.AuthCookie);
    		auth = await users.getUserBySession(req.session.id) != null;
    	} catch (e) {
    		auth = false;
    	}
	let logMessage = "";
	//let logMessage = "[" + new Date().toUTCString() + "]: " + req.method + " " + req.originalUrl + " ";
    	if (auth) {
    		res.redirect("/private");
		logMessage = "[" + new Date().toUTCString() + "]: " + req.method + " " + req.originalUrl + " (Authenticated User)";
    	}
	else {
    		res.render("root", {title: "Login Screen"});
		logMessage = "[" + new Date().toUTCString() + "]: " + req.method + " " + req.originalUrl + " (Non-Authenticated User)";
    	}
	console.log(logMessage);
});

module.exports = router;
