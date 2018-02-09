var fs = require("fs");


/**
 * Reads data from file. Assuming the file is very large we don't
 * want to read the contents all at once. 
 * @param {string} fileName File name 
 * @param {string} encoding File encoding (i.e., UTF-8)
 */
function readStream(fileName, encoding) {
    var stream = fs.createReadStream(fileName, encoding);

    var data = "";

    
    // display an initial message (once)
    stream.once("data", function() {
        console.log("\n\n\n\n");
        console.log("Started reading file");
        console.log("\n\n\n\n");
    });

    // start reading the file in small chunks
    stream.on("data", function(chunk){
        process.stdout.write(`   chunk: ${chunk.length} |`);
        data += chunk;
    });

    // when done reading the file
    stream.on("done", function(){
        console.log("\n\n\n\n");
        console.log(`Finished reading file ${data.lenght}`);
        console.log("\n\n\n\n");
    });
}
