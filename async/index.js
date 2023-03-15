let numberOfIntervalTimes = 0;
function order() {
  setTimeout(() => {
    console.log("The meal is ready");
  }, 3000);

  const intervalId = setInterval(() => {
    numberOfIntervalTimes++;
    console.log("Hi Tomer how are you?");
    if (numberOfIntervalTimes > 3) {
      clearInterval(intervalId);
    }
  }, 750);
}

console.log("Script start");
order();
console.log("Script End");

// call stack, callback queue,webApi & event loop
// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbWFpbigpewogICAgbWV0aG9kQSgpCn0KZnVuY3Rpb24gbWV0aG9kQSgpewogICAgbWV0aG9kQigpCn0KZnVuY3Rpb24gbWV0aG9kQigpewogICAgbWV0aG9kQygpCn0KZnVuY3Rpb24gbWV0aG9kQygpewogICAgc2V0VGltZW91dChmdW5jdGlvbigpewogICAgICAgIGNvbnNvbGUubG9nKCJIaSIpCiAgICB9LDMwMDApCn0KbWFpbigpCgo%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
