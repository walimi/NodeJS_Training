var express = require("express");
var cors = require("cors");
var app = express();

var soccerTerms = [
	{
		term: "ADVANTAGE RULE",
		defined: "The referee does not have to stop play every time he detects a foul. "
	},
	{
		term: "LINESMAN",
		defined: "Former term for assistant referee."
	},
	{
		term: "TACKLE",
		defined: "To use the feet in attempting to take the ball from an opponent's feet."
	},
	{
		term: "PENALTY",
		defined: "Beware! The word 'penalty' has a very specific (and very dramatic) meaning in soccer. "
	},
	{
		term: "OFFSIDE",
		defined: "The word is singular. Offside. How or why the plural version 'offsides' arose I have no idea, but it is incorrect."
	},
];

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;