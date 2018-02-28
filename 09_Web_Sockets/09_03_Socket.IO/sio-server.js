
"use strict";

var express = require("express");
var http = require("http");
var app = express();

// create an http server passing the express http web server and listen on 
// port 3000
var server = http.createServer(app).listen(3000); 

// socket.io is a function that takes the http server as an argument
var io = require("socket.io")(server);

// serve static files from public folder using express
app.use(express.static("./public"));


// for every socket connection
io.on("connection", function(socket) {

    // for every chat event, broadcast the message to all
    // connected sockets. 
    socket.on("chat", function(message) {
        socket.broadcast.emit("message", message);
    });

    socket.emit("message", "Welcome to Cyber chat");
});

console.log("Starting socket app using http://localhost:3000");
