// Lab 8 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require("express");
const router = express.Router();
const data = require("../data");
const people = data.people;

router.post("/", async(req, res) => {
	try {
		let result = await people.search_name(req.body.personName);
		res.render("posts/search", { title: "People Found", people: result, personName: req.body.personName });
	} catch (e) {
		res.status(400).render('posts/error', { title: "400 Error" });
		return;
	}
});

module.exports = router;
