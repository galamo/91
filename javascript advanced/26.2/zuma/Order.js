function Order(
  email,
  numberOfSeats,
  credit,
  allergies = [],
  comments = "No Comments",
  date,
  time,
  outside,
  n,
  isInEditMode = false
) {
  this.orderNumber = n || `order_${Math.ceil(Math.random() * 99999999999)}`;
  this.email = email;
  this.numberOfSeats = +numberOfSeats;
  this.credit = credit;
  this.allergies = allergies;
  this.comments = comments;
  this.date = date;
  this.time = time;
  this.outside = outside;
  this.isInEditMode = isInEditMode;
}

Order.prototype.setNumberOfSeats = function (nos) {
  if (!nos) return;
  this.numberOfSeats = +nos;
};

Order.prototype.setCredit = function (newCredit) {
  if (typeof newCredit === "string" && newCredit.length === 16) {
    this.credit = newCredit;
  }
};

console.log("Order is loaded!");
