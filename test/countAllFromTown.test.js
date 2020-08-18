let assert = require("assert");
let countAllFromTown = require ("../countAllFromTown");



describe("The countAllFromTown function", function() {
  

    it("should count Stellenbosch registrations", function() {
      assert.equal(4, countAllFromTown ("CL 123,CL 321,CY 133,CL 123,CL 123","CL"));
    });

    it("should count all CJ registrations", function() {
      assert.equal(6, countAllFromTown ("CL 123,CL 321,CL 123,CL 321,CY 133,CL 123,CL 123","CL"));
    });


  });

  