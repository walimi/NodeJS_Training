var express = require("express");

var app = express();


app.use(function(req, res, next) {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// serves static files located in the public directory
app.use(express.static("./public"));

app.listen(3000);

console.log("Express server running on port 3000");

module.exports = app;