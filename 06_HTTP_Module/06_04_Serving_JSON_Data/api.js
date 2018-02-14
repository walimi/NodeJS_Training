// an HTTP server that returns JSON data

var http = require("http");
var data = require("./data/inventory");

http.createServer(function(req, res) {
    
    if (req.url === "/") { // requesting all data
        res.writeHead(200, {"Content-type": "text/json"});
        res.end(JSON.stringify(data));
    } else if (req.url === "/instock") { 
        listInStock(res);
    } else if (req.url === "/onbackorder") {
        listOnBackOrder(res);
    } else {
        res.writeHead(404, {"Content-type": "text/plain"});
        res.end("Whoops...Data not found.");
    }
}).listen(3000);

console.log("Server listening on port 3000");

function listInStock(res) {
    var inStock = data.filter(function(item) {
        return item.avail.toLowerCase().trim() === "in stock";
    });

    res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res) {
    var onBackOrder = data.filter(function(item) {
        return item.avail.toLowerCase().trim() === "on back order";
    });

    res.end(JSON.stringify(onBackOrder));
}

