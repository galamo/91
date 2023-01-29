const numberOfProducts = 3;
const productsArray = [];
for (let index = 0; index < numberOfProducts; index++) {
  const productName = prompt("Please Enter the product name");
  const productPrice = parseInt(prompt("Please Enter the product price"));
  const currentProduct = {
    productName: productName,
    productPrice: productPrice,
  };
  productsArray.push(currentProduct);
}

console.log(productsArray);



// productsArray.map(item=>item.productName)
// for tomer


