var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req, res) {
    console.log(`${req.method} request for ${req.url}`);

    if (req.url === "/") { // if the request is for the root 
        fs.readFile("./public/index.html", "UTF-8", function(err, html) {
            res.writeHead(200, {"Content-type": "text/html"});
            res.end(html);
        });
    } else if (req.url.match(/.css$/)) { // regex to find files that end with .css
        var cssPath = path.join(__dirname, "public", req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");

        res.writeHead(200, {"Content-type": "text/css"});
        fileStream.pipe(res); // piping the read stream to the write stream (i.e., res is a write stream)

    } else if (req.url.match(/.jpg$/)) { // regex to find files that end with .jpg
        var imgPath = path.join(__dirname, "public", req.url);
        var imgStream = fs.createReadStream(imgPath); // no encoding b/c binary

        res.writeHead(200, {"Content-type": "image/jpeg"});
        imgStream.pipe(res);
    }else {
        res.writeHead(404, {"Content-type": "text/plain"});
        res.end("404 File Not Found");
    }

}).listen(3000);

console.log("File server running on port 3000");