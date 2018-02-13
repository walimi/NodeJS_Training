var https = require("https"); // we can use the HTTP or HTTPS module. (However, certain sites require HTTPS)
var fs = require("fs");
var presidentName = "Barack_Obama";

var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/" + presidentName,
    method: "GET"
};

var req = https.request(options, function(res) {
    var responseBody = "";

    console.log("Response from server started...");
    console.log(`Server Status: ${res.statusCode}`);
    console.log("Response Headers: %j", res.headers); // %j gets the JSON data

    res.setEncoding("UTF-8"); // by default response will be in binary so we have to set to UTF-8 encoding

    res.once("data", function(chunk){
        console.log(chunk);
    });


    res.on("data", function(chunk){
        console.log(`---chunk--- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on("end", function() {
        fs.writeFile(presidentName + ".html", responseBody, function(err) {
            if(err) {
                throw err;
            }
            console.log("File has been downloaded.");
        });
    });

});

req.on("error", function(err) {
    console.log(`error with the request: ${err.message}`);
});

req.end();