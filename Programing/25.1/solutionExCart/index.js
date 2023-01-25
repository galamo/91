function cartExSolution() {
  const numberOfProducts = parseInt(
    prompt("Please Enter the number of Products")
  );
  let totalCartPrice = 0;
  const cart = [];
  for (let index = 0; index < numberOfProducts; index++) {
    const nameOfCurrentProduct = prompt("Please Enter the number of Products");
    cart.push(nameOfCurrentProduct);
    const currentProductPrice = getPriceByProduct(nameOfCurrentProduct);
    totalCartPrice += currentProductPrice;
  }

  printTotalCartAmountPrice(totalCartPrice);
  console.log(`Your products are ${cart.join(" ")}`);
}

function getPriceByProduct(product) {
  switch (product.toLowerCase()) {
    case "apple": {
      return 4;
    }
    case "bread": {
      return 3;
    }
    case "tomato": {
      return 2;
    }
    case "orange": {
      return 2;
    }
    default: {
      return 10;
    }
  }
}

function printTotalCartAmountPrice(totalPrice) {
  console.log(`Total cart price is: ${totalPrice}$`);
}

cartExSolution();
