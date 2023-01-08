var numBetween10And99 = 63;

var ahadot = numBetween10And99 % 10;
var asarot = parseInt(numBetween10And99 / 10);
var newAsarot = ahadot * 10;
var newAhadot = asarot * 1;
var opositeNumber = newAsarot + newAhadot;
console.log("From " + numBetween10And99 + " To " + opositeNumber);

console.log(
  (numBetween10And99 % 10) * 10 + parseInt(numBetween10And99 / 10) * 1
);


