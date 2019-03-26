const express = require("express");
const router = express.Router();
const data = require("../data");
const peopleData = data.people;

router.post("/", async (req, res) => {
	try {
		const data = req.body;
		const result = await people.search(data.personName);
		res.render("posts/search", { title: "People Found", people: result, personName: req.body.personName }); 
	} catch (e) {
		res.status(400).render('posts/error',{ title: "400 Error" });
	}
});

module.exports = router;
