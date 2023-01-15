function init() {
  var n = parseInt(prompt("Enter n"));
  var counter = 0;

  while (counter <= n) {
    if (counter % 2 == 0) {
      console.log(counter);
    }
    counter = counter + 1;
  }
}

init();

// function init() {
//   var n = parseInt(prompt("Enter n"));
//   var counter = 1;

//   while (counter <= n) {
//     console.log(counter);
//     counter = counter + 2;
//   }
// }

// init();
