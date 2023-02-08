function init() {
  const order = new Order(
    "galamouyal88@gmail.com",
    5,
    2542546246,
    ["peanuts"],
    "i would like to seat next to Tobi from Tuba-Zangaria",
    new Date().toString(),
    new Date().toString(),
    true
  );
  console.log(order);

  //  making onclick="addNNewOrder()" from JS:
  //   const addNewOrderButton = document.getElementById("addNewOrderButton");
  const addNewOrderButton = document.querySelector("#addNewOrderButton");
  console.log(addNewOrderButton);
}
console.log("Index is loaded!");
init();
