let assert =  require("assert");
let countAllPaarl =  require("../countAllPaarl")

describe ("The countAllPaarl function", function(){

    it("should return Paarl registrations", function() {
      assert.equal(3, countAllPaarl ("CJ 123, CJ 321, CY 133, CJ 246","CJ"));
    
    });

});
