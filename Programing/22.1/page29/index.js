// 1234
// 10

// page 29 ex 3
function ex3() {
  var someNumber = parseInt(prompt("Please Enter A Number"));

  while (someNumber > 0) {
    var currentNumber = someNumber;
    var sum = 0;
    //  recieve new number
    while (someNumber > 0) {
      sum = sum + (someNumber % 10);
      someNumber = parseInt(someNumber / 10);
    }
    //
    console.log(
      `The current number is: ${currentNumber} And the sum of digits: ${sum}`
    );
    someNumber = parseInt(prompt("Please Enter A number ( inside while loop"));
  }
}

ex3();
