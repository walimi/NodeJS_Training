// writing to a new file
var fs = require("fs");

/**
 * @param {string} fileName Name of the file
 * @param {string} contents Contents of the file
 * @param {function} callbackFunction Callback function to call when contes are written.
 */
function writeToFile(fileName, contents, callback) {
    fs.writeFile(fileName, contents, callback);
}


