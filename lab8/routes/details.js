// Lab 8 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require("express");
const router = express.Router();
const data = require("../data");
const people = data.people;

router.get("/:id", async(req, res) => {
	try{
		let person = await people.getPersonById(parseInt(req.params.id));
		res.render("posts/details", { title: "Person Found", person: person, name: person.firstName + " " + person.lastName });
	} catch(e){
		res.status(400).render("posts/error2", { title: "400 Error", id: req.params.id });
		return;
	}
});

module.exports = router;
