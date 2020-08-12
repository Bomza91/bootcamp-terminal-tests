let assert = require ("assert");
let regCheck = require("../regCheck");


describe("The regCheck function", function(reg1, reg2) {
    it("should return true for (GP)", function() {
      var regNumber = 'GP 123-246';
    
      assert.equal(true, regCheck(regNumber, 'GP'));
      
    });
  });
