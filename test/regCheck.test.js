let assert = require ("assert");
let regCheck = require("../regCheck");


describe("The regCheck function", function(reg1, reg2) {
    it("should return true for (GP)", function() {
      var regNumber = 'GP 123-246';
    
      assert.equal(true, regCheck(regNumber, 'GP'));
      
    });

    it("should return true for (CA)", function() {
      var regNumber = 'CA 321-246';
    
      assert.equal(true, regCheck(regNumber, 'CA'));
      
    });

    it("should return true for (MP)", function() {
      var regNumber = 'MP 852-246';
    
      assert.equal(true, regCheck(regNumber, 'MP'));
      
    });
  });
