
"use strict";

var fs = require("fs");
var path = require("path");

/**
 * Reads files from directory and logs contents of the files 
 */
var printFileContent = function(directory) {
    fs.readdir(directory, function(err, files){
        files.forEach(function(fileName){
            var file = path.join(__dirname, "lib", fileName);
            var stats = fs.statSync(file);
            if(stats.isFile()) {
                fs.readFile(file, "UTF-8", function(err, contents){
                    if (err) {
                        console.log(err);
                    }
                    console.log(contents);
                });
            }
        });    
    });
}

