// CS 546 - Lab 10
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require('express');
const router = express.Router();
const users = require("../data/users")

router.get('/', async (req, res) => {
	let auth = false;
    	try {
    		auth = await users.getUserBySession(req.session) != null;
    	} catch (e) {
    		auth = false;
    	}

    	if (auth) {
    		res.redirect("/private");
    	}
	else {
    		res.render("root", {title: "Login Screen"});
    	}
});

module.exports = router;
