let assert = require("assert");
let isFromBellville = require ("../isFromBellville");



describe("The isFromBellville function ", function() {
  
    it("should return Bellville registration", function() {
      assert.equal(true, isFromBellville("CY"));
    });
    
    it("should not return Bellville registration", function() {
      assert.equal(false, isFromBellville("CA"));
    });
    

  });
  