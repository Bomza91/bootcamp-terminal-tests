let assert = require("assert");
let isWeekday = require("../isWeekday");


describe("The isWeekday function ", function(){
  
    it ("should say that Monday is a weekday", function() {
        
        assert.equal(isWeekday("Monday"), true);
    });
  
    it ("should say that Friday is a weekday", function() {
        assert.equal(isWeekday("Friday"), true);
    });
    
    it ("should say that Sunday is not weekday", function() {
        assert.equal(isWeekday("Sayurday"), false);
        
    });
  
    it ("should say that Saturday is not weekday", function() {
        assert.equal(isWeekday("Sunday"), false);
    });
    
  
    
});



