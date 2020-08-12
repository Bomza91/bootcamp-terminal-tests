let assert = require("assert");
let countAllFromTown = require ("../countAllFromTown");



describe("The countAllFromTown function", function() {
  
    it("should return Stellenbosch registrations", function() {
      assert.equal(2, countAllFromTown ("CL 123,CL 321,CY 133","CL"));
    });
    

  });

  