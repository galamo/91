const DOM = {
  content: document.querySelector("#content"),
  controllers: document.querySelector("#controllers"),
};
const DEFAULT_NUMBER_OF_PRODUCTS = 5;

let limit = 0;
let skip = 0;
let currentProductsLength = 0;

function init() {
  const limitsOptionsArray = [
    { value: 5, text: 5 },
    { value: 10, text: 10, selected: true },
    { value: 15, text: 15 },
    { value: 20, text: 20 },
    { value: 36, text: 36 },
  ];
  const selectOption = getSelect(limitsOptionsArray, (value) => {
    skip = 0;
    limit = Number(value);
    getProductsHandler(limit, skip);
  });

  DOM.controllers.append(selectOption);
  const defaultValue = limitsOptionsArray.find((item) => item.selected);
  const defaultNum = defaultValue?.value || DEFAULT_NUMBER_OF_PRODUCTS;
  limit = defaultNum;
  getProductsHandler(defaultNum, skip);

  const prevButton = getButton("Prev");
  const nextButton = getButton("Next");

  prevButton.addEventListener("click", function () {
    if (skip - limit < 0) {
      skip = 0;
    } else {
      skip = skip - limit;
    }
    getProductsHandler(limit, skip);
  });
  nextButton.addEventListener("click", function () {
    if (currentProductsLength < limit) return;
    skip = skip + limit;
    getProductsHandler(limit, skip);
  });

  DOM.controllers.append(prevButton, nextButton);
}
init();
async function getProductsHandler(limit, skip) {
  try {
    showLoader();
    const result = await getProducts(limit, skip);
    const products = result.products;
    if (!Array.isArray(products)) throw new Error("Api error");
    currentProductsLength = products.length;
    draw(products);
  } catch (error) {
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
      drawProduct(result[index]);
    }
  } else {
    drawProduct(result);
  }
}
function drawProduct(product) {
  const div = document.createElement("div");
  const img = getImg(product?.thumbnail);
  const h2 = document.createElement("h2");
  h2.innerText = `${product?.price} $`;
  const h1 = document.createElement("h1");
  h1.innerText = product.title;

  div.classList.add("cardi");
  div.append(h1, h2, img);
  DOM.content.append(div);
}

async function getProducts(limit = 10, skip = 0) {
  const result = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
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

function getButton(innerText) {
  const button = document.createElement("button");
  button.innerText = innerText;
  button.classList.add("btn", "btn-secondary");
  return button;
}
