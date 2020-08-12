module.exports = function findItemsOver(list,number){
// console.log(list);
  var results = []
 for(var i=0; i<list.length;i++){
   var shopping = list[i].qty
   if (list[i].qty>number){
     results.push(list[i]);
  
  }
 }
  return results;
}