function getDiscount(arrayOfPrices, discountJR) {
  if (Array.isArray(arrayOfPrices) === false) {
    return "Prices Should be array";
  }
  if (typeof discountJR !== "number") {
    return "Discount Should be  a number";
  }
  const pricesAfterDiscount = [];
  for (let index = 0; index < arrayOfPrices.length; index++) {
    const priceAfterDiscount = arrayOfPrices[index] * (1 - discountJR);
    pricesAfterDiscount.push(parseInt(priceAfterDiscount));
  }
  return pricesAfterDiscount;
}

const inputArr = [1, 1, 2, 3];
const result = getDiscount(inputArr, disc);

// function getDiscount(arrayOfPrices, discountJR) {
//   if (typeof discountJR === "number") {
//     if (Array.isArray(arrayOfPrices) === true) {
//       const pricesAfterDiscount = [];
//       for (let index = 0; index < arrayOfPrices.length; index++) {
//         const priceAfterDiscount = arrayOfPrices[index] * (1 - discountJR);
//         pricesAfterDiscount.push(parseInt(priceAfterDiscount));
//       }
//       return pricesAfterDiscount;
//     }
//   }
// }
