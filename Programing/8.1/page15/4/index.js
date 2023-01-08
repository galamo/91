var movieLengthMin = 121;

var movieLengthInHour = parseInt(movieLengthMin / 60); // 1 OR 2 OR 3 ...
var movieLengthInMin = movieLengthMin % 60;

console.log(
  "the requested result = hours:min",
  movieLengthInHour + ":" + movieLengthInMin
); // the requested result = hours:min
console.log("concat as string", movieLengthInHour + "" + movieLengthInMin); // concat as string
console.log("sum - two numbers", movieLengthInHour + movieLengthInMin); // sum - two numbers
