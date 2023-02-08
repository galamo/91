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
  this.orderNumber = `order_${Math.ceil(Math.random() * 99999999999)}`;
  this.email = email;
  this.numberOfSeats = +numberOfSeats;
  this.credit = credit;
  this.allergies = allergies;
  this.comments = comments;
  this.date = date;
  this.time = time;
  this.outside = outside;
}

console.log("Order is loaded!");
