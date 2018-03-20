var expect = require("chai").expect;
var tools = require("../lib/tools"); // this is where the printName function will live

describe("printName()", function(){
    it("should print the last name first.", function() {
        var results = tools.printName( {first: "Wahid", last: "Alimi"});

        expect(results).to.equal("Alimi, Wahid");
    });
});

