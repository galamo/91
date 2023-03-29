const DOM = {
  controllers: document.querySelector("#controllers"),
  content: document.querySelector("#content"),
  inputSearch: null,
  buttonSearch: null,
};
function init() {
  drawControllers();
}

function drawControllers() {
  const controllersUi = [];
  DOM.inputSearch = getInput("search", ["form-control", "snir-class"]);
  DOM.buttonSearch = getButton("Search");
  DOM.buttonSearch.addEventListener("click", function () {
    const value = DOM.inputSearch.value;
    drawMovies(value);
  });
  controllersUi.push(DOM.inputSearch, DOM.buttonSearch);
  DOM.controllers.append(...controllersUi);
}

async function drawMovies(value) {
  try {
    const result = await searchMoviesApi(value);
    if (!result) {
      const h1 = document.createElement("h1");
      h1.innerText = "No Data";
      DOM.content.append(h1);
      return;
    }
    const moviesTable = getTable(Object.keys(result[0]));
    DOM.content.append(moviesTable);
  } catch (error) {
    console.log(error);
  }
}

init();

function getTable(columns) {
  const table = document.createElement("table");
  const classes = ["table", "table-dark", "table-striped"];
  table.classList.add(...classes);
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const columnsTh = columns.map((column) => {
    const currentTh = document.createElement("th");
    currentTh.innerText = column;
    currentTh.id = column;
    currentTh.scope = "col";
    return currentTh;
  });
  tr.append(...columnsTh);
  thead.append(tr);
  table.append(thead);
  return table;
}
