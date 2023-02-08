const DOM = {
  emailInput: null,
  numberOfSeats: null,
  ordersTableBody: null,
};

let orders = [];

function init() {
  DOM.emailInput = document.querySelector("#orderEmail");
  DOM.numberOfSeats = document.querySelector("#numberOfSeats");
  DOM.ordersTableBody = document.querySelector("#ordersTable tbody");
  //   making onclick="addNNewOrder()" from JS:
  //   const addNewOrderButton = document.getElementById("addNewOrderButton");
  const addNewOrderButton = document.querySelector("#addNewOrderButton");
  addNewOrderButton.addEventListener("click", addNewOrderFn);

  const clearTableButton = document.querySelector("#clearTable");
  clearTableButton.addEventListener("click", clearTableFn);
  function clearTableFn() {
    DOM.ordersTableBody.innerHTML = "";
  }
  function addNewOrderFn(event) {
    // console.log(event); // event
    // console.log(this); // button!

    console.log(DOM.emailInput.value);
    console.log(DOM.numberOfSeats.value);
    orders.push(new Order(DOM.emailInput.value, DOM.numberOfSeats.value));

    // draw(orders);
  }
}
console.log("Index is loaded!");
init();
