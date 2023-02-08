let counter;
function init() {
  counter = 1;
  console.log("Avi Pessage + Avi Peretx = Great developers");
}

init();

// object in JS
// const order = { numOfSeats: 6, outside: false............ }

// function constructor - model //class
function Order(
  email,
  numberOfSeats,
  credit,
  allergies = [],
  comments = "No Comments",
  date,
  time,
  outside
) {
  this.orderNumber = `order_${counter++}`;
  this.email = email;
  this.numberOfSeats = +numberOfSeats;
  this.credit = credit;
  this.allergies = allergies;
  this.comments = comments;
  this.date = date;
  this.time = time;
  this.outside = outside;
}

// falsy statements:

// null
// "" - empty string
// undefined
// 0 - number
// false

// truthy statements:
// 2, {} , [], "dfdf" , "null" , true

const currentDateTime = new Date();
// instanced of the function constructor Order
const order1 = new Order(
  "may@gmail.com",
  5,
  12434353,
  ["eggs"],
  "",
  currentDateTime.getDate(),
  currentDateTime.getTime(),
  true
);
const order2 = new Order("alon@gmail.com", "5");
const order3 = new Order("blabla,5", 5);
console.log(order1, order2, order3);
