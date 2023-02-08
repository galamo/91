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

  function addNewOrderFn(event) {
    // console.log(event); // event
    // console.log(this); // button!

    console.log(DOM.emailInput.value);
    console.log(DOM.numberOfSeats.value);
    orders.push(new Order(DOM.emailInput.value, DOM.numberOfSeats.value));

    draw(orders);
    clearForm();
  }
}
function clearForm() {
  DOM.emailInput.value = "";
  DOM.numberOfSeats.value = "";
}
function clearTableFn() {
  DOM.ordersTableBody.innerHTML = "";
}
function draw(ordersArray) {
  if (Array.isArray(ordersArray) === false) return;
  // document.createElement!
  // DOM.ordersTableBody.append
  // DOM.ordersTableBody > tr > td,td,td,td
  clearTableFn();
  for (let index = 0; index < ordersArray.length; index++) {
    const currentOrder = ordersArray[index];
    // create row
    const tableRow = document.createElement("tr");
    // create orderNumber column
    const tdOrderId = document.createElement("td");
    tdOrderId.innerText = currentOrder.orderNumber;
    // create email column
    const tdEmail = document.createElement("td");
    tdEmail.innerText = currentOrder.email;
    // create numberOfSeats column
    const tdNumberOfSeats = document.createElement("td");
    tdNumberOfSeats.innerText = currentOrder.numberOfSeats;
    // create Button column
    const tdActions = document.createElement("td");
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn", "btn-danger");
    buttonDelete.innerText = "X";
    tdActions.append(buttonDelete);
    buttonDelete.addEventListener("click", function () {
      orders.splice(index, 1);
      draw(orders);
    });

    tableRow.append(tdOrderId, tdEmail, tdNumberOfSeats, tdActions);
    DOM.ordersTableBody.append(tableRow);
  }
}
init();
