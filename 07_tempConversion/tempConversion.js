const ftoc = function(ftemp) {
let celciusTemp = (ftemp-32)*5/9
let roundedCelsTemp = Math.round(celciusTemp * 10) / 10
return roundedCelsTemp; 

};

const ctof = function(ctemp) {
  let farTemp = (ctemp * 1.8) + 32
  let roundedFarTemp = Math.round(farTemp * 10) /10
  return roundedFarTemp; 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
