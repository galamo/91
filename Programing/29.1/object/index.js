const milkBottle = {
  // key:value,key:value,key:value
  shape: "rectangle",
  price: 5.2,
  categories: ["drinks", "dairy", "cosher"],
  expirationDate: "2023-02-06",
};
// typeof milkBottle ?= > 'object'

console.log(milkBottle);

// access properties in the object
console.log(milkBottle.expirationDate); // dot notation
console.log(milkBottle["expirationDate"]); // square brackets

// console.log(milkBottle.dynamicField) // this will not work because
// milkBottle dont have property/key = dynamicField
const dynamicField = "shape";
console.log(milkBottle[dynamicField]); // square brackets - dynamically

// modify your object - increase the price
milkBottle.price = milkBottle.price * 1.5;
console.log(milkBottle);

// add property to our object
milkBottle.height = "25cm";
console.log(milkBottle);
