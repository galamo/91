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
// var result2 = ex11();
// console.log(`The number of digits is: ${result2}`);

function ex12() {
  // get the number of digits
  //   1234  theRightDigit = 4
  //   123   theRightDigit = 3
  //   12    theRightDigit = 2
  //   1     theRightDigit = 1

  var inputNumber = parseInt(prompt("Enter The relevant Number"));
  var sum = 0;
  while (inputNumber > 0) {
    var theRightDigit = inputNumber % 10;
    sum = sum + theRightDigit;
    inputNumber = parseInt(inputNumber / 10);
  }
  return sum;
}
var result12 = ex12();
console.log(`The Sum of digits is: ${result12}`);

function ex13() {
  // 122342
  //  2
  //  3

  //   2 === 2  c++
  //   2 === 4
  //   2 === 3
  //   2 === 2  c++
  //   2 === 2  c++
  //   2 === 1

  var inputNumber = parseInt(prompt("Enter The relevant Number"));
  var inputDigit = parseInt(prompt("Enter The tested digit"));
  var numberOfAppearances = 0;
}
var result13 = ex13();
console.log(`The Sum of digits is: ${result13}`);
