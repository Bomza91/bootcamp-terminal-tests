module.exports = function mostProfitableDepartment(info){
  console.log(info)
  var object = {};
  for(var i=0;i<info.length;i++){
  if(object[info[i].department] === undefined){
      object[info[i].department] = 0;
    };
    object[info[i].department] = object[info[i].department] + info[i].sales ;
  };
 
  var mostProfitableDept = "";
  var highestSales = 0;
 
 
  for (var key in object) {
  if(object[key] >= highestSales){
      highestSales = object[key]
      mostProfitableDept = key;
    }
  }
  return mostProfitableDept;
 
};

// function mostProfitableDay(info){
//   console.log(info)
// var object = {};
//   for(var i=0;i<info.length;i++){
//   if(object[info[i].day] === undefined){
//       object[info[i].day] = 0;
//     };
//     object[info[i].day] = object[info[i].day] + info[i].sales ;
//   };
 
//   var profitableDay = "";
//   var highestSales = 0;
 
 
//   for (var key in object) {
//   if(object[key] >= highestSales){
//       highestSales = object[key]
//       profitableDay = key;
//     }
//   }
//   return profitableDay;
// };
