const express = require("express");
const router = express.Router();
const data = require("../data");
const peopleData = data.people;

router.get("/:id", async (req, res) => {
	try {
		const result = await peopleData.get(req.params.id);
		res.render("posts/details", { title: "Person Found", person: result, name: person.firstName + " " + person.lastName });
	} catch (e) {
		res.status(400).render("posts/error2", { title: "400 Error", id: req.params.id });
	}
});

module.exports = router;
