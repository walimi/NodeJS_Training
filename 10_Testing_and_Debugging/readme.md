10 - Testing and Debugging
===========================

10_01 - Testing with Mocha and Chai
------------------------------------

### Install the Mocha testing framework globally using the following command

* `sudo npm install mocha -g` 

(You not need the sudo command in a Mac environment.)

To run Mocha type `mocha` in the command line

With Mocha you place the test files under the test folder.  

### Install Chai using the following npm command

* `npm install chai --save-dev`

Chai is the assertion engine. 

10_02 - Asynchronous Mocha Testing
------------------------------------

Loading a website is an asyn process. 

If we don't pass a variable such as "done" to the it functions callback, the mocha
test will run. If you do add a variable, Mocha will wait until the callback in the 
function we're testing is actually completed. 

10_03 - Mocking a Server with Nock
------------------------------------

## Install Nock using the following npm command

* `npm install nock --save-dev`

Nock helps mock web-servers so you don't have to go to the actual web-server when testing
with Mocha.


10_04 - Injecting Dependencies with Rewire
-------------------------------------------

### Install Rewire module using the following command

* `npm install rewire --save-dev`

Here we're testing the order module which reads "real" data from data/inventory.json file. With Rewire
we'll be mocking that data. 

We're replacing real data with test data for SUT (system under test.)

10_05 - Advanced Testing Sinon Spies
------------------------------------

Standalone test spies, stubs and mocks for JavaScript. Works with any unit testing framework.

### Install Sinon module using the following command

* `npm install sinon --save-dev`


10_06 - Advanced Testing Sinon Stubs
------------------------------------


10_07 - Code coverage with Istanbul
------------------------------------

Istanbul is a node module that we can use to generate code coverage reports. 

### Install Istanbul module with the following command

* `npm install -g Istanbul`

### To make Istanbul work with Mocha run the following from the command line

* `istanbul cover _mocha`

Running the above command will generate a coverage folder. Navigate to the 
Coverage > lcov-report > index.html to see the coverage details in a HTML page. 


10_08 - Testing HTTP Endpoints with Supertest
---------------------------------------------
(I copied files from start folder and ran npm install. Then executed node app to run the app.)

You can use Supertest modules to test your HTTP endpoints whether you're returning HTML pages
or JSON API data.  

### Intall the Supertest module by running the following command

* `npm install supertest --save-dev`


10_09 - Checking Server Responses with Cheerio
-----------------------------------------------
  