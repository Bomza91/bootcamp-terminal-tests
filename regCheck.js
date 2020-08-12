module.exports = function regCheck(item, location){
  // console.log(location)
  var reg = item.startsWith(location);
  return reg;
}