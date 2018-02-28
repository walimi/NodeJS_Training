"use strict";

// create socket object and point it to the 
// socket server listening on localhost:3000
var socket = io("http://localhost:3000");

// handle the disconnect event
socket.on("disconnect", function(){
    setTitle("Disconnected");
});

// handle the connect event
socket.on("connect", function(){
    setTitle("Connected to Cyber Chat");
}); 

// handle the "message" event emitted by the socket server
socket.on("message", function(message){
    printMessage(message);
});


document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value);
    // when the user enters a message, emit the chat event
    // this event is handled on the socket server
    socket.emit("chat", input.value);
    input.value = '';
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}
