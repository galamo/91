const DOM = {
  emailInput: null,
  numberOfSeats: null,
  ordersTableBody: null,
  filter: null,
  addNewOrderButton: null,
};

let orders = createObjects(JSON.parse(localStorage.getItem("orders")) || []);
let isSaveMode = false;
let currentEditableOrder = null;

function createObjects(orders) {
  const n = [];
  for (let i = 0; i < orders.length; i++) {
    n.push(
      new Order(
        orders[i].email,
        orders[i].numberOfSeats,
        null,
        null,
        null,
        null,
        null,
        null,
        orders[i].orderNumber
      )
    );
  }
  return n;
}

function init() {
  DOM.emailInput = document.querySelector("#orderEmail");
  DOM.numberOfSeats = document.querySelector("#numberOfSeats");
  DOM.ordersTableBody = document.querySelector("#ordersTable tbody");

  DOM.filter = document.querySelector("#filter");

  DOM.addNewOrderButton = document.querySelector("#addNewOrderButton");
  addNewOrderButton.addEventListener("click", addNewOrderFn);

  const clearTableButton = document.querySelector("#clearTable");
  clearTableButton.addEventListener("click", clearTableFn);

  DOM.filter.addEventListener("input", function (event) {
    filterOrdersFn(event.target.value);
  });
  function addNewOrderFn(event) {
    if (isSaveMode && currentEditableOrder) {
      const editableOrder = orders.find(function (co) {
        return co.orderNumber === currentEditableOrder;
      });
      editableOrder.email = DOM.emailInput.value;
      //   editableOrder.numberOfSeats = +DOM.numberOfSeats.value; // there is a better solution
      editableOrder.setNumberOfSeats(DOM.numberOfSeats.value);
    } else {
      orders.push(new Order(DOM.emailInput.value, DOM.numberOfSeats.value));
    }
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
  draw(filteredOrders);
}
function clearForm() {
  DOM.emailInput.value = "";
  DOM.numberOfSeats.value = "";
  changeButtonToAddOrEditMode(false);
}

function changeButtonToAddOrEditMode(isSaveMode) {
  if (isSaveMode) {
    // false = "" / 0 / null / undefined / false
    DOM.addNewOrderButton.innerText = "Save";
    DOM.addNewOrderButton.classList.add("btn-warning");
  } else {
    DOM.addNewOrderButton.innerText = "Order";
    DOM.addNewOrderButton.classList.remove("btn-warning");
  }
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

    const row = currentOrder.isInEditMode
      ? getEditableRow(currentOrder)
      : getRow(currentOrder);

    DOM.ordersTableBody.append(row); //table > tbody > tr
  }
}
function callMainFormEdit(currentOrder) {
  const theEditableOrder = orders.find(function (itemInArray) {
    if (itemInArray.orderNumber === currentOrder.orderNumber) {
      return true;
    } else return false;
  });

  DOM.emailInput.value = theEditableOrder.email;
  DOM.numberOfSeats.value = theEditableOrder.numberOfSeats; // HTML form contains the current order

  currentEditableOrder = currentOrder.orderNumber;
  isSaveMode = true; // globals
  changeButtonToAddOrEditMode(true);
}
function callInlineEdit(currentOrder) {
  currentOrder.isInEditMode = true;
  draw(orders);
}
init();

function getRow(currentOrder) {
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
  const buttonEdit = document.createElement("button");

  buttonEdit.classList.add("btn", "btn-primary");
  buttonEdit.innerText = "Edit";

  buttonDelete.classList.add("btn", "btn-danger");
  buttonDelete.innerText = "X";

  buttonEdit.addEventListener("click", function () {
    //   callMainFormEdit(currentOrder);
    callInlineEdit(currentOrder);
  });
  buttonDelete.addEventListener("click", function () {
    const indexToDelete = orders.findIndex(function (co) {
      return currentOrder.orderNumber === co.orderNumber;
    });
    orders.splice(indexToDelete, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    filterOrdersFn(DOM.filter.value);
  });

  tdActions.append(buttonDelete, buttonEdit);
  tableRow.append(tdOrderId, tdEmail, tdNumberOfSeats, tdActions);
  return tableRow;

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

function getEditableRow(currentOrder) {
  const tableRow = document.createElement("tr");
  // create orderNumber column
  tableRow.id = currentOrder.orderNumber;
  const tdOrderId = document.createElement("td");
  tdOrderId.innerText = currentOrder.orderNumber;
  // create email column
  const tdEmail = document.createElement("td");
  const tdInputEmail = document.createElement("input");
  tdInputEmail.id = "email";
  tdInputEmail.value = currentOrder.email;
  tdEmail.append(tdInputEmail);
  const tdNumberOfSeats = getNumberOfSeatsEditableTD(
    currentOrder.numberOfSeats
  );
  // create Button column
  const tdActions = document.createElement("td");

  const buttonEdit = document.createElement("button");
  const buttonCancelEdit = document.createElement("button");

  buttonEdit.classList.add("btn", "btn-primary");
  buttonEdit.innerText = "Save";

  buttonCancelEdit.classList.add("btn", "btn-danger");
  buttonCancelEdit.innerText = "Cancel";

  buttonEdit.addEventListener("click", function () {
    const currentRow = document.querySelector(`#${currentOrder.orderNumber}`);
    const newEmail = currentRow.querySelector("#email").value;
    currentOrder.email = newEmail;
    currentOrder.isInEditMode = false;
    draw(orders);
  });
  buttonCancelEdit.addEventListener("click", function () {
    currentOrder.isInEditMode = false;
    draw(orders);
  });

  tdActions.append(buttonEdit, buttonCancelEdit);
  tableRow.append(tdOrderId, tdEmail, tdNumberOfSeats, tdActions);
  return tableRow;

  function getNumberOfSeatsEditableTD(numberOfSeats) {
    if (typeof numberOfSeats !== "number") return;
    const numberOfSeatsTd = document.createElement("td");
    const selectElement = document.createElement("select");
    selectElement.classList.add("form-control");
    for (let index = 1; index < 9; index++) {
      const currentOption = document.createElement("option");
      currentOption.value = index;
      currentOption.innerText = index;
      if (numberOfSeats === index) {
        // to show what is actually selected in the current order
        currentOption.selected = true;
      }
      selectElement.append(currentOption);
    }
    numberOfSeatsTd.append(selectElement);
    return numberOfSeatsTd;
  }
}
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
