let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe("The countRegNumber function", function(){
it ("should count registration numbers", function(){

assert.equal(3, countRegNumber("CA 123, CJ 254,CY 987" ))


});

it ("should count all the registration numbers", function(){

    assert.equal(5, countRegNumber("CA 123, CJ 254,CY 987,CJ 543, CL 987" ))
    
});
});
  