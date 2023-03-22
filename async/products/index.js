const DOM = {
  content: document.querySelector("#content"),
  controllers: document.querySelector("#controllers"),
};

function init() {
  const limitsOptionsArray = [
    { value: 5, text: 5 },
    { value: 10, text: 10, selected: true },
    { value: 15, text: 15 },
    { value: 20, text: 20 },
  ];
  const selectOption = getSelect(limitsOptionsArray, (value) => {
    getProductsHandler(value);
  });
  DOM.controllers.append(selectOption);
}
init();
async function getProductsHandler(limit) {
  try {
    showLoader();
    const result = await getProducts(limit);
    const products = result.products;
    if (!Array.isArray(products)) throw new Error("Api error");
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
  const img = getImg(product?.thumbnail);
  const h2 = document.createElement("h2");
  h2.innerText = `${product?.price} $`;
  const h1 = document.createElement("h1");
  h1.innerText = product.title;
  DOM.content.append(h1, h2, img);
}

async function getProducts(limit = 10) {
  const result = await fetch(`https://dummyjson.com/products?limit=${limit}`);
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
