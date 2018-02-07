"use strict";

var fs = require("fs");

/**
 * Creates a directory
 * @param {string} name Name of the directory 
 * @param {function} callback Callback function 
 */
function createDirectoryAsync(name, callback) {
    fs.mkdir(name, callback);
}

// example invocation
createDirectoryAsync("lib", function(err){
    if (err) {
        console.log(err)
    } else {
        console.log("Directory created...");
    }
});