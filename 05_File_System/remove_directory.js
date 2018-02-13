// NOTE: 
// before removing any directory that contains files
// you must remove, move or handle files in that directory 

var fs = require("fs");


/**
 *  Removes the directory
 * @param {string} dirName Directory to be removed 
 */
function removeDirectory(dirName) {
    // iterate through all the files in the directory and
    // remove them first. 
    fs.readdirSync(dirName).forEach(function(fileName) {
        fs.unlinkSync(dirName + fileName);
    });

    fs.rmdir(dirName, function(err){
        if(err) {
            throw err;
        }
        console.log(dirName + " removed.");
    });
}

// sample invocation
removeDirectory("my_directory");