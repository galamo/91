function init() {
  var size = prompt("Please Enter Size?");
  var toppings = prompt("Please Enter Toppings?");
  var address = prompt("Please Enter Address?");

  var currentPrice = getPriceBySize(size);
  if (currentPrice != 0) {
    logReceipt(currentPrice, size, toppings, address);
  } else {
    throw new Error("No Such pizza sizza");
  }
}
function logReceipt(p, s, t, a) {
  console.log(
    `You ordered pizza in ${s} size , with toppings: ${t} , Total price is: ${p}`
  );
}

function getPriceBySize(pizzaSize) {
  var smallSize = "small";
  var medSize = "med";
  var largeSize = "l";

  if (pizzaSize == smallSize) {
    return 20;
  } else if (pizzaSize == medSize) {
    return 40;
  } else if (pizzaSize == largeSize) {
    return 60;
  } else {
    return 0;
  }
}

init();
