const DOM = {
  input: document.querySelector("#searchInput"),
  button: document.querySelector("#searchButton"),
  content: document.querySelector("#content"),
};

function init() {
  DOM.button.addEventListener("click", handleSearch);
}
init();

async function handleSearch() {
  try {
    showLoader();
    const result = await searchCountry(DOM.input.value);
    if (!Array.isArray(result)) throw new Error("Api error");
    draw(result);
  } catch (error) {
    console.log("I AM HERE AND I AM NOT HAPPY");
    swal({
      title: "Something went wrong!",
      text: "Contact admin",
      icon: "error",
    });
  } finally {
    removeLoader();
  }
}
function draw(result) {
  DOM.content.innerHTML = "";
  if (Array.isArray(result)) {
    for (let index = 0; index < result.length; index++) {
      drawCountry(result[index]);
    }
  } else {
    drawCountry(result);
  }
}
function drawCountry(countryToDraw) {
  const img = getImg(countryToDraw?.flags?.png);
  const h1 = document.createElement("h1");
  h1.innerText = countryToDraw?.name?.common;
  DOM.content.append(img, h1);
}

async function searchCountry(country) {
  const result = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const json = await result.json();
  return json;
}
{
  /* <div class="spinner-border" role="status"> */
}
function showLoader() {
  DOM.content.innerHTML = "";
  const loader = document.createElement("div");
  loader.id = "searchLoader";
  loader.classList.add("spinner-border");
  DOM.content.append(loader);
}

function removeLoader() {
  const loader = document.querySelector("#searchLoader");
  if (loader) {
    loader.remove();
  }
}
