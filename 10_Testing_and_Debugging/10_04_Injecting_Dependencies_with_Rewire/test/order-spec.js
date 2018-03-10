var expect = require("chai").expect;
var rewire = require("rewire");

// we're requiring the SUT (system under test) using rewire
// instead of require so that we can set the inventoryData variable
var order = rewire("../lib/order");

describe("Ordering items", function() {
    
    // we execute this before each test function
    beforeEach(function() {
        this.testData = [
            { sku: "AAA", qty: 10 },
            { sku: "BBB", qty: 0 },
            { sku: "CCC", qty: 3 },
        ];

        // note that "inventoryData" is the name of the variable in order module
        // here, we're reseting it to this.testData    
        order.__set__("inventoryData", this.testData);

    });

    it("order an item if there are enough in the stock", function(done){
        
        order.orderItem("CCC", 3, function() {
            // if this callback function is invoked then it means the orderItem was 
            // successfull and the test will pass
            done();
        });
    });
});