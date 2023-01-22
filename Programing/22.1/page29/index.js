// 1234
// 10

// page 29 ex 3
function ex3() {
  var someNumber = parseInt(prompt("Please Enter A Number"));

  while (someNumber > 0) {
    var currentNumber = someNumber;
    var sum = 0;
    while (someNumber > 0) {
      sum = sum + (someNumber % 10);
      someNumber = parseInt(someNumber / 10);
    }
    // someNumber----1234    sum----0=0+4 => 4
    // someNumber----123     sum----4=4+3 => 7
    // someNumber----12      sum----7=7+2 => 9
    // someNumber----1
    // someNumber----0

    console.log(
      `The current number is: ${currentNumber} And the sum of digits: ${sum}`
    );
    someNumber = parseInt(prompt("Please Enter A number ( inside while loop"));
  }
}

ex3();
