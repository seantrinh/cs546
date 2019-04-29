// CS 546 - Lab 10
// I pledge my honor that I have abided by the Stevens Honor System.
const express = require("express");
const bodyParser = require("body-parser");
const configRoutes = require("./routes");
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const userData = require("./data/users.js");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cookieParser());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
configRoutes(app);

app.listen(3000, () => {
	console.log("Your server is now listening on port 3000!");
	console.log("Naviagate to http://localhost:3000 to access it!");
	if (process && process.send) {
		process.send({ done: true });
	}
});

