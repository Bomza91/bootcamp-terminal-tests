let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("The yearAgo function", function () {
    it("should return how many years ago", function () {


        assert.equal(4, yearsAgo(2016))

    });

    it("should return how many years ago from 2012", function () {


        assert.equal(8, yearsAgo(2012))


    });
});