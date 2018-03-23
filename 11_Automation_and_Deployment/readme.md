11 - Automation and Deployment
===============================

11_01 - Hinting your code with Grunt
-------------------------------------

### Install the Grunt CLI using the following command
* `npm install -g grunt-cli` (use sudo in a Mac environment)

### Install Grunt locally to dev-dependencies
* `npm install grunt --save-dev`

### Install Grunt JS Hint using the following command
* `npm install grunt-contrib-jshint --save-dev`

Run grunt in the command line by typing 
* `grunt`

11_02 - Converting LESS to CSS with Grunt
-----------------------------------------

### Install the following module in dev-dependencies
* `npm install grunt-contrib-less --save-dev`

To run the CSS task from the GruntFile.js, use the following command from command line:
* `grunt css`

Install the following package to ensure flex (used in CSS) work in as many browsers as possible. (It adds vendor prefixes to CSS files generated from LESS file.)
* `npm install grunt-autoprefixer --save-dev`

Then you can run grunt in the command line to execute all tasks configured in GruntFile.js file. 

11_03 - Bundling client scripts with Browserify
------------------------------------------------
Using the CommonJS pattern to require jQuery. 

### Intsalll the jQuery module using the following command

* `npm install jquery`

### Install the Browserify module using the following command

* `npm install grunt-browserify --save-dev` 