function init() {
  var message = "Please Enter the Number";
  var number = parseInt(prompt(message));
  var max = number;
  var index = 0;
  var maxIndex = 0;
  var sum = number;
  if (number == 0) {
    console.log("No max in this function");
    return; //return undefined
  }
  while (number != 0) {
    if (number > max) {
      max = number;
      maxIndex = index;
    }
    number = parseInt(prompt(message));
    index++;
    sum = sum + number;
  }
  console.log(
    `The maximum value is ${max} & the index is ${maxIndex} And the sum is: ${sum}`
  );
}

init();
