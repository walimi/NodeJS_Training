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


// remove file


/**
 * Removes the file synchronously
 * 
 * @param {string} fileName File name (including relative path)
 */
function removeFileSync(fileName) {
    try {
        fs.unlinkSync(fileName);
    }
    catch (err) {
        console.log(err);
    }
    
}

// sample invocation
removeFileSync("my_directory/my_file.js");

/**
 * Removes the file asynchronously
 * @param {string} fileName File name (including relative path) 
 * @param {function} callback Callback function  
 */
function removeFile(fileName, callback) {
    fs.unlink(fileName, callback);
}

// sample invocation

removeFile("my_directory/my_fileName.js", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File removed successfully.")
    }
});