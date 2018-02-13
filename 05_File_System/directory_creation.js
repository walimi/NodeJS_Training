"use strict";

var fs = require("fs");

/**
 * Creates a directory if it doesn't exist.
 * 
 * @param {string} directoryName Name of the directory 
 * @param {function} callback Callback function 
 */
function createDirectoryAsync(directoryName, callback) {
    if (fs.existsSync(directoryName)) {
        console.log("Directory already exists.");
    } else {
        fs.mkdir(name, callback);
    }
}

// example invocation
createDirectoryAsync("lib", function(err){
    if (err) {
        console.log(err)
    } else {
        console.log("Directory created...");
    }
});