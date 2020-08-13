let assert = require("assert");
let findItemsOver = require("../findItemsOver");




describe("The findItemsOver function", function() {
    it("should find items over", function(){

        var itemList = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ];
        
        // var results = findItemsOver(itemList, 25)
        
        var results = [
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
        ];
      
    
      assert.deepEqual(results, findItemsOver(itemList, 20));
      
    });

    it("should find items over 30", function(){

        var itemList = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ];
        
        // var results = findItemsOver(itemList, 25)
        
        var results = [
            { name: 'pears', qty: 37 },
            // { name: 'bananas', qty: 27 },
        ];
      
    
      assert.deepEqual(results, findItemsOver(itemList, 30));
      
    });


});