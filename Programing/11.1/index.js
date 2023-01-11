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
function convertUserToEmail() {
  console.log("Start convertUserToEmail");
  console.log("End convertUserToEmail");
}
// call function
convertUserToEmail();
