// an HTTP server that returns JSON data

var http = require("http");
var data = require("./data/inventory");

http.createServer(function(req, res) {
    
    res.writeHead(200, {"Content-type": "text/json"});
    res.end(JSON.stringify(data));

}).listen(3000);

console.log("Server listening on port 3000");