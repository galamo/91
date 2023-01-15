function init() {
  var top = prompt("Please Enter a number");
  var topInt = parseInt(top);
  var counter = 1;
  while (topInt >= counter) {
    console.log(counter);
    counter = counter + 1;
  }
  console.log("Thanks Alon");
}

init();
