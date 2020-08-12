module.exports = function countAllPaarl(reg){
  var town = reg.split(", ")
    var number = [];
  //console.log(town)
    for (var i = 0; i < town.length; i++){
    if ( town[i].startsWith("CJ")){
    number.push(town[i])
      }
  }
   
    return number.length
  }
  