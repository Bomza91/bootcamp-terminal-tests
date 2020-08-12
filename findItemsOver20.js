module.exports = function findItemsOver20(list){
  // console.log(list);
    var results = [];
   for(var i=0; i<list.length;i++){
     var shopping = list[i].qty;
     if (list[i].qty>20){
       results.push(list[i]);
       
     }
   }
     return results;  
  }
  
  // function findItemsOver(list,number){
  // console.log(list);
  //   var results = []
  //  for(var i=0; i<list.length;i++){
  //    var shopping = list[i].qty
  //    if (list[i].qty>number){
  //      results.push(list[i]);
    
  //   }
  //  }
  //   return results;
  // }