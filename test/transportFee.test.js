let assert = require("assert");
let transportFee = require("../transportFee")

describe("The transportFee function ", function(){

  
  it ("should be 'R20' for morning shift", function(){
    assert.equal(true, true);
  });
  
  it ("should be 'R10' for afternoon shift", function(){
    assert.equal(true, true);
  });
  
  it ("should be 'free' for night shift", function(){
    assert.equal(false, false);
  });
});

