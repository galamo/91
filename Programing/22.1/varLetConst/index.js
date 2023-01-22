// var
// let

// const

const message = "Enter a number";
//  message = "Please Enter a number" WILL NOT WORK
let inputNumber = 1;
inputNumber = 2;

for (var varIndex = 0; varIndex < 20; varIndex++) {
  // inside loop
}
// outside loop
console.log(varIndex); // global variable

if (true) {
  var insideIfVar = true;
}
console.log(insideIfVar); // global variable

for (let letIndex = 0; letIndex < 20; letIndex++) {
  // inside loop
}
// console.log(letIndex); // WILL NOT WORK = scope variable
if (true) {
  let insideIfLet = true;
}
//console.log(insideIfLet); // WILL NOT WORK = scope variable
