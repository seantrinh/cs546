// Lab 6 - CS 546
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
	try {
		const about = {
			"name": "Sean Trinh",
			"cwid": "10416232",
			"biography": "My name is Sean Trinh. I am originally from Hammonton, New Jersey. I go to Stevens Institute of Technology and study computer science! I also am minoring in economics and mathematics. I conducted research here after my freshman year, and am now a published author because of it! Last summer, I worked on the cybersecurity team for the AEGIS weapon system for Lockheed Martin, and this summer, I will be working at Goldman Sachs in Investment Management Division Technology.\nHaving been born in the Greater Philadelphia Area and having lived in South Jersey for a majority of my life, I have always been a huge Eagles fan. Arguably, one of the greatest days of my life was when the Eagles won Super Bowl 52! I am also into sports in general, both watching and playing. Beyond sports, I like to cook, and have unrealistic aspirations of becoming a sommelier! My ultimate goal, however, is to have enough pocket change to make a throne out of money and own a pet tiger!",
			"favoriteShows": ["Breaking Bad","The Office","F is for Family!","Black Mirror","House of Cards"],
			"hobbies": ["Watching sports (go birds!)","Cooking/Eating","Listening to music","Playing games (billiards, ping pong)","Making MONEY"]
		}
		res.json(about);
	} catch(e) {
		console.log(e);
	}
});

module.exports = router;
