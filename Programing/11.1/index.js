// if ?
// assignment ?
// left hand var x =
// ()
// { SCOPE }

// if(CONDIFTION){
// CODE A
// } else{
// CODE B
// }

var userName = "Lea Balet"; // string
var age = 23; // number
var isStudent = true; // boolean

console.log(typeof userName);
console.log(typeof age);
console.log(typeof isStudent);

var userName2 = "Guy";
var city = "Netanya";
var address = null;
var buildingNumber; // undefined

// function

var user = "aviPessah";
var gmailDomain = "@gmail.com";
var hotmailDomain = "@hotmail.com";
var wallaDomain = "@walla.com";
var email = user + wallaDomain;
console.log(email);
var user2 = "alonTaviv";
var email2 = user2 + gmailDomain;
console.log(email2);

// declare a function & implementation
function convertUserToEmail(un, d, isInternal) {
  var com = ".com";
  var coil = ".co.il";
  if (isInternal == true) {
    return un + "@" + d + ".b" + coil;
  } else {
    return un + "@" + d + ".b" + com;
  }
}

// call function ( execution )
var result = convertUserToEmail("gal", "hotmail", true);
console.log("the new email is: " + result);

console.log(convertUserToEmail("gal", "hotmail", true));
console.log(convertUserToEmail("lior", "gmail", false));
console.log(convertUserToEmail("noy", "icloud", true));
console.log(convertUserToEmail("tomer", "walla", false));

function printMyName() {
  var myName = "Gal Amouyal";
  console.log(myName);
  return myName;
}

printMyName();
printMyName();

var resultFromPrintMyName = printMyName();
console.log("Function result: " + resultFromPrintMyName);

function getCarPost(company, year, model, km, hand, price, phone) {
  return (
    "Car info: Company " +
    company +
    ", Year: " +
    year +
    " , Price:" +
    price +
    " , phone:" +
    phone
  );
}

function getApartmentPost(city, numberOfRooms, price) {
  return `The city apartment is ${city} and the number of rooms is: ${numberOfRooms}, price ${price} `;
}

var post1 = getCarPost("Nissan", 2014, "Qashqai", 77000, 1, 65000, 050538169);
console.log(post1);
var post2 = getCarPost("BMW", 2022, "x5", 100, 1, 650000, 0505381691);
console.log(post2);
var post3 = getApartmentPost("Ashdod", 5, "2.2m");
console.log(post3);

// var productName = prompt("Enter your product name");
// var productType = prompt("Enter your product type");
// console.log(productName, productType);

function buyInStore(product) {
  if (product == "milk") {
    return 12;
  } else if (product == "steak") {
    return 100;
  } else if (product == "pasta") {
    return 8;
  } else {
    return "We dont have this product!";
  }
}

// console.log(buyInStore("chocolate"));
// console.log(buyInStore("milk"));
// console.log(buyInStore("steak"));

var pName = prompt("What would you like to buy?");
console.log(buyInStore(pName));
