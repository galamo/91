const DOM = {
  emailInput: null,
  numberOfSeats: null,
  ordersTableBody: null,
  filter: null,
};

let orders = JSON.parse(localStorage.getItem("orders")) || [];

function init() {
  DOM.emailInput = document.querySelector("#orderEmail");
  DOM.numberOfSeats = document.querySelector("#numberOfSeats");
  DOM.ordersTableBody = document.querySelector("#ordersTable tbody");

  DOM.filter = document.querySelector("#filter");

  //   making onclick="addNNewOrder()" from JS:
  //   const addNewOrderButton = document.getElementById("addNewOrderButton");
  const addNewOrderButton = document.querySelector("#addNewOrderButton");
  addNewOrderButton.addEventListener("click", addNewOrderFn);

  const clearTableButton = document.querySelector("#clearTable");
  clearTableButton.addEventListener("click", clearTableFn);

  DOM.filter.addEventListener("input", function (event) {
    filterOrdersFn(event.target.value);
  });
  function addNewOrderFn(event) {
    // console.log(event); // event
    // console.log(this); // button!
    orders.push(new Order(DOM.emailInput.value, DOM.numberOfSeats.value));
    localStorage.setItem("orders", JSON.stringify(orders));
    draw(orders);
    clearForm();
  }

  draw(orders);
}
function filterOrdersFn(filterValue) {
  if (!filterValue) return draw(orders);
  const filteredOrders = orders.filter(function (currentOrder) {
    return currentOrder.email.includes(filterValue);
  });
  //   let filteredOrders = [];
  //   for (let index = 0; index < orders.length; index++) {
  //     if (orders[index].email.includes(filterValue)) {
  //       filteredOrders.push(orders[index]);
  //     }
  //   }
  draw(filteredOrders);
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
    const tdNumberOfSeats = getNumberOfSeatsTD(currentOrder.numberOfSeats);
    // create Button column
    const tdActions = document.createElement("td");
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn", "btn-danger");
    buttonDelete.innerText = "X";
    tdActions.append(buttonDelete);
    buttonDelete.addEventListener("click", function () {
      const indexToDelete = orders.findIndex(function (co) {
        return currentOrder.orderNumber === co.orderNumber;
      });
      orders.splice(indexToDelete, 1);
      localStorage.setItem("orders", JSON.stringify(orders));
      //   const idToDelete = currentOrder.orderNumber;
      //   for (let index = 0; index < orders.length; index++) {
      //     if (orders[index].orderNumber === idToDelete) {
      //       orders.splice(index, 1);
      //     }
      //   }
      filterOrdersFn(DOM.filter.value);
    });

    tableRow.append(tdOrderId, tdEmail, tdNumberOfSeats, tdActions); // tr>td,td,td,td
    DOM.ordersTableBody.append(tableRow); //table > tbody > tr
  }
  function getNumberOfSeatsTD(numberOfSeats) {
    if (typeof numberOfSeats !== "number") return;
    const numberOfSeatsTd = document.createElement("td");
    for (let index = 0; index < numberOfSeats; index++) {
      const person = document.createElement("i");
      person.className = "bi-person";
      numberOfSeatsTd.append(person);
    }
    numberOfSeatsTd.append(`(${numberOfSeats})`);
    return numberOfSeatsTd;
  }
}
init();

// Filter explanation
const ages = [30, 28, 22, 25, 21, 27, 26]; // v
const age = 25; // v
let filteredAges = []; // v
for (let index = 0; index < ages.length; index++) {
  // v
  const currentElement = ages[index]; // v
  if (currentElement > age) {
    // ?
    filteredAges.push(currentElement);
  }
}
// filter , map, reduce, find, findIndex , some
const filteredAges2023 = ages.filter(function (
  currentElement,
  index,
  allArray
) {
  return currentElement > age; // true
  // currentElement = 22 use 99%
  // index = 2 using 50 %
  // allArray = filteredAges2023 90 % not in use
});
// same code simple - and with higher standartizations
const filteredAges2023v2 = [30, 28, 22, 25, 21, 27, 26].filter(function (c, i) {
  console.log(i, c);
  return c > age;
});

const theIndex2023 = [30, 28, 22, 25, 21, 27, 26].findIndex(function (c, i) {
  return c === 21;
});

const theElement2023 = [30, 28, 22, 25, 21, 27, 26].find(function (c, i) {
  return c === 21;
});
console.log(filteredAges2023);
