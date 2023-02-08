const DOM = {
  emailInput: null,
  numberOfSeats: null,
  //   allergins: null,
};

function init() {
  DOM.emailInput = document.querySelector("#orderEmail");
  DOM.numberOfSeats = document.querySelector("#numberOfSeats");
  //   making onclick="addNNewOrder()" from JS:
  //   const addNewOrderButton = document.getElementById("addNewOrderButton");
  const addNewOrderButton = document.querySelector("#addNewOrderButton");
  addNewOrderButton.addEventListener("click", addNewOrderFn);

  function addNewOrderFn(event) {
    // console.log(event); // event
    // console.log(this); // button!

    console.log(DOM.emailInput.value);
    console.log(DOM.numberOfSeats.value);
  }
}
console.log("Index is loaded!");
init();
