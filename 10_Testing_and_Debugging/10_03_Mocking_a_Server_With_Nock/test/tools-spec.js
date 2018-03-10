var expect = require("chai").expect;
var tools = require("../lib/tools"); // this is where Tools functions will live
var nock = require("nock");

describe("Tools", function() { // you can nest describe calls
    describe("printName()", function(){
        it("should print the last name first.", function() {
            var results = tools.printName( {first: "Wahid", last: "Alimi"});
            expect(results).to.equal("Alimi, Wahid");
        });
    });


    describe("loadWikis()", function() {
    
        before(function() {
            nock("https://en.wikipedia.org")
                .get("/wiki/Abraham_Lincoln")
                .reply(200, "Mock Abraham Lincoln page");
        });

        it("should load Abraham Lincoln's wikipedia page", function(done) {
            tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html){
                expect(html).to.equal("Mock Abraham Lincoln page"); 
                done();
            });
        });
    });
});




