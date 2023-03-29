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
    DOM.content.innerText = "loading..";
    const result = await searchMoviesApi(value);
    if (!result) {
      const h1 = document.createElement("h1");
      h1.innerText = "No Data";
      DOM.content.append(h1);
      return;
    }
    const moviesTable = getTable(result);
    DOM.content.innerHTML = "";
    DOM.content.append(moviesTable);
  } catch (error) {
    console.log(error);
  }
}

init();

function getTable(data) {
  const columns = Object.keys(data[0]);
  const table = document.createElement("table");
  const classes = ["table", "table-dark", "table-striped"];
  table.classList.add(...classes);
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
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
  tbody.append(...data.map(getTrData).flat());
  table.append(thead, tbody);
  return table;

  function getTrData(currentItem) {
    const tr = document.createElement("tr");
    const trAdditionalInfo = document.createElement("tr");
    trAdditionalInfo.id = currentItem.imdbID;
    const allTds = Object.entries(currentItem).map(([key, value]) => {
      const td = document.createElement("td");
      if (key === "Poster") {
        const image = getImg(value, 100);
        td.append(image);
      } else if (key === "imdbID") {
        const btn = getButton(value);
        btn.addEventListener("click", async function () {
          try {
            const tdInner = document.createElement("td");
            tdInner.colSpan = "5";
            const result = await getMovieByIdApi(currentItem.imdbID);
            const description = result.Plot;
            tdInner.innerText = description;
            trAdditionalInfo.append(tdInner);
          } catch (error) {
            trAdditionalInfo.innerText = "something went wrong";
          }
        });
        td.append(btn);
      } else {
        td.innerText = value;
      }
      return td;
    });
    tr.append(...allTds);

    return [tr, trAdditionalInfo];
  }
}
