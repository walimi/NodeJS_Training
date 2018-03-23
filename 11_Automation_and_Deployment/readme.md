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

11_04 - Rapid Development with Grunt Watches
---------------------------------------------

### Install the following module

* `npm install grunt-contrib-watch --save-dev`

After installing the above module and configuring the GruntFile.js to watch for files, 

1. Run `grunt` in the command line to make sure the files are generated
2. Start the application by running `node app`
3. Open another terminal window (or tab)
4. Type `grunt watch`

This will watch the files for any changes and run the tasks defined in the grunt watch task. 

11_05 - Automation with npm
---------------------------
After configuring the scripts node in package.json file you run the following command:
* `npm start`

You can also create custom commands under script node. In this case we have created the `dev` custom
script. (Refer to the package.json > script node to see the details.) 

After configuring the custom `dev` script, you can run it using the following command
* `npm run dev`

Note that for scripts like "start", "test", "publish" or "install" we do not need to use the `run`
keyword as those are built-in. For any custom scripts like `dev` we'll need to specify `run`.  

11_06 - Debugging with npm
----------------------------
