function init() {
  var userName = prompt("Please Enter Your Name");
  var counter = 1;
  while (counter <= 10) {
    console.log(userName);
    console.log("======");
    // counter++;
    counter = counter + 1;
  }
  console.log("Thanks", userName);
}

// run in the beginning
init();
