"use strict";

var fs = require("fs");

// rename file

/**
 * Renames a file
 * @param {string} oldFileName Old file name (including relative path) 
 * @param {string} newFileName New file name 
 */
function renameFileSync(oldFileName, newFileName) {
    fs.renameSync(oldFileNam, newFileName);
}

// example invocation
renameFileSync("li/old_file_name.js", "new_file_name.js")


function renameFileAsync(oldFileName, newFileName) {
    fs.rename(oldFileName, newFileName, function(err) {
        if(err) {
            throw err;
        }
    });
}