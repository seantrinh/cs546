// Lab 6 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const story = {
			"storyTitle": "The Story of the Ugly Barnacle",
			"story": "Once there was an ugly barnacle.\nHe was so ugly that everyone died.\nThe end.\n\nBut it wasn't the end.\nBecause in an alternate universe, everyone was resurrected.\nBut the ugly barnacle was even uglier this time.\nSo everyone died, again.\nThe end."
		}
		res.json(story);
	} catch (e) {
		console.log(e);
	}
});

module.exports = router;
