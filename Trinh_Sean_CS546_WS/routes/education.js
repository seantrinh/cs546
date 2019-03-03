// Lab 6 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const schools = [
			{
				"schoolName": "Stevens Institute of Technology",
				"degree": "Undergraduate Degree",
				"favoriteClass": "BT 353 - Project Management",
				"favoriteMemory": "(Will be) leaving this place"
			},
			{
				"schoolName": "Hammonton High School",
				"degree": "High school degree",
				"favoriteClass": "AP Calculus",
				"favoriteMemory": "Also leaving that place"
			},
			{
				"schoolName": "Hammonton Middle School",
				"degree": "Middle school degree",
				"favoriteClass": "Math (I kind of forget at this point)",
				"favoriteMemory": "Probably leaving that place"
			}
		]
		res.json(schools);
	} catch (e) {
		console.log(e);
	}
});

module.exports = router;
