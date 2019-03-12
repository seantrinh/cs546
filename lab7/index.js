// CS 546 - Lab 7
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require("express");
const app = express();
const configRoutes = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
configRoutes(app);

app.listen(3000, () => {
	console.log("We've now got a server!");
	console.log("Your routes will be running on http://localhost:3000");
});
