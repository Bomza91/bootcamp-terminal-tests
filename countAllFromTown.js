module.exports = function countAllFromTown(town){
var reg = town.split(",")
  var y = []
  for (var i = 0; i < reg.length; i++){
  if ( reg[i].startsWith("CL")){
  y.push(reg[i])
    }
}
 
  return y.length
}
