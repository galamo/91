function init() {
  var from = parseInt(prompt("Enter the first number"));
  var to = parseInt(prompt("Enter the second number"));

  var min;
  var max;
  if (from > to) {
    max = from;
    min = to;
  } else {
    max = to;
    min = from;
  }
  printFromMinToMax(min, max);
}

function printFromMinToMax(minimum, maximum) {
  while (minimum <= maximum) {
    console.log(minimum);
    minimum = minimum + 1;
  }
}

init();
