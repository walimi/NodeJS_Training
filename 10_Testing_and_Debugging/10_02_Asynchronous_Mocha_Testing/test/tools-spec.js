var expect = require("chai").expect;
var tools = require("../lib/tools"); // this is where Tools functions will live

describe("Tools", function() { // you can nest describe calls
    describe("printName()", function(){
        it("should print the last name first.", function() {
            var results = tools.printName( {first: "Wahid", last: "Alimi"});
            expect(results).to.equal("Alimi, Wahid");
        });
    });

    describe("loadWikis()", function() {
        it("should load Abraham Lincoln's wikipedia page", function(done) {
            tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html){
                expect(html).to.be.ok; 
                done();
            });
        });
    });
});




