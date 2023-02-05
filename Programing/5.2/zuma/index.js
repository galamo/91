let counter;
function init() {
  counter = 1;
}

init();

// object in JS
// const order = { numOfSeats: 6, outside: false............ }

// function constructor - model
function Order(email, numberOfSeats, credit) {
  this.orderNumber = `order_${counter++}`;
  this.email = email;
  this.numberOfSeats = +numberOfSeats;
  this.credit = credit;
}
// instanced of the function constructor Order
const order1 = new Order("may@gmail.com", 5);
const order2 = new Order("alon@gmail.com", "5");
const order3 = new Order("blabla,5", 5);
console.log(order1, order2, order3);
