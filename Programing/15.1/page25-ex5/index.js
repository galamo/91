function init() {
  var number = parseInt(prompt("Please Enter your number"));
  var sum = 0;
  // 999 = stop
  while (number != 999) {
    sum = sum + number;
    number = parseInt(prompt("Please Enter your number"));
  }
  console.log(sum);
}

init();
