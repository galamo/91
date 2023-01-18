function ex10String() {
  var a = prompt("Enter Number");
  console.log(a[0]);
}
// ex10String();

function ex10() {
  // get the left digit
  var inputNumber = parseInt(prompt("Enter The relevant Number"));
  console.log(`>>input number is: ${inputNumber}`);
  while (inputNumber >= 10) {
    console.log(`>>current InputNumber before divide: ${inputNumber}`);
    inputNumber = parseInt(inputNumber / 10);
    console.log(`>>current InputNumber after divide: ${inputNumber}`);
  }
  return inputNumber;
}
// var result = ex10();
// console.log(`the left digit is: ${result}`);

function ex11String() {
  var a = prompt("Enter Number");
  console.log(a.length);
}
// ex11String();

function ex11() {
  // get the number of digits
  var inputNumber = parseInt(prompt("Enter The relevant Number"));
  var numberOfDigits = 1;
  while (inputNumber >= 10) {
    inputNumber = parseInt(inputNumber / 10);
    numberOfDigits++;
  }
  return numberOfDigits;
}
var result2 = ex11();
console.log(`The number of digits is: ${result2}`);
