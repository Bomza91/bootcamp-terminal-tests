let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");



describe("The totalPhoneBill function", function(){
it ("should takes in a string of calls made", function(){

    assert.equal("R"+2.75, totalPhoneBill("call"));

});

it ("should takes in a string of sms's sent", function(){

    assert.equal("R"+0.65, totalPhoneBill("sms"));

});

});