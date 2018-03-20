var request = require("supertest");
var expect = require('chai').expect;
var rewire = require('rewire');
var app = rewire('../app');

describe("Dictionary App", function () {

    it("Loads the home page", function(done) {
        // call Mocha's done function as soon as Supertest has 
        // loaded the home page and received a HTTP 200 Success message. 
        request(app).get("/").expect(200).end(done);
    });

    describe("Dictionary API", function () {

        beforeEach(function () {

        	this.defs = [
                {
                    term: "One",
                    defined: "Term One Defined"
                },
                {
                    term: "Two",
                    defined: "Term Two Defined"
                }
            ];

            app.__set__("skierTerms", this.defs);
        });

        it("GETS dictionary-api", function(done) {
            request(app).get("/dictionary-api").expect(200).end(done);
        });

        it("POSTS dictionary-api", function(done) {
            request(app).post("/dictionary-api")
                .send({ "term": "Three", "defined": "Term three defined" })
                .expect(200)
                .end(done);
        });

        it("DELETES dictionary-api", function(done) {
            request(app)
                .delete("/dictionary-api/One")
                .expect(200)
                .end(done);
        });

    });

});