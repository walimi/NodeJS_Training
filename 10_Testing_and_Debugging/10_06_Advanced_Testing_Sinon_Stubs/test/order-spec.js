var expect = require("chai").expect;
var rewire = require("rewire");

// we're requiring the SUT (system under test) using rewire
// instead of require so that we can set the inventoryData variable
var order = rewire("../lib/order");

var sinon = require("sinon");

describe("Ordering items", function() {
    
    // we execute this before each test function
    beforeEach(function() {
        this.testData = [
            { sku: "AAA", qty: 10 },
            { sku: "BBB", qty: 0 },
            { sku: "CCC", qty: 3 },
        ];

        this.console = {
            log: sinon.spy()
        };


        this.warehouse = {
            packageAndShip: sinon.stub().yields(10987654321)
        };

        // note that "inventoryData" is the name of the variable in order module
        // here, we're reseting it to this.testData    
        order.__set__("inventoryData", this.testData);

        // we're "hijacking" the console.log statements so to avoid seeing those
        // in our output. 
        order.__set__("console", this.console);

        // here we're stubbing the packageAndShip method so that 
        // our tests don't actually call this method.
        order.__set__("warehouse", this.warehouse);

    });

    it("order an item if there are enough in the stock", function(done){
        
        // we need to protect the scope of this object
        var _this = this;

        order.orderItem("CCC", 3, function() {

            // this is to to ensure our console object's are called properly
            // (at this point we should have called console.log 2 times)
            expect(_this.console.log.callCount).to.equal(2);

            // if this callback function is invoked then it means the orderItem was 
            // successfull and the test will pass
            done();
        });
    });

    describe("Warehouse interaction", function() {

        beforeEach(function() {
            this.callback = sinon.spy();
            order.orderItem("CCC", 2, this.callback);
        });

        // we want test to see if this.callback from line 63 was called 
        // with a tracking number of 10987654321
        it("receives a tracking number", function() {
            expect(this.callback.calledWith(10987654321)).to.equal(true);
        });

        // we want to test to see if warehouse.packageAndShip was called with 
        // item: "CCC" and quantity: 2
        it("calls packageAndShip with the correct sku and quantity", function() {
            expect(this.warehouse.packageAndShip.calledWith("CCC", 2)).to.equal(true);
        });


    });


});