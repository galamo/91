function fetchCarsFromServer2(hp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("in server...");
      if (hp) resolve(cars.filter((c) => c.Horsepower > hp));
      else reject("Missing HorsePower");
    }, 1500);
  });
}
// IIFE
// let i = 0;
// (function () {
//   document.querySelector("#increase").addEventListener("click", function () {
//     i++;
//     this.innerText = `clickme ${i}`;
//   });
//   document.querySelector("#getCars").addEventListener("click", function () {
//     document.querySelector("#spinner").style.display = "block";
//     document.querySelector("#content").innerText = "";
//     console.log("event listener");
//     fetchCarsFromServer2(220)
//       .then((LiorCars) => {
//         for (let index = 0; index < LiorCars.length; index++) {
//           const h1 = document.createElement("h1");
//           h1.innerText = LiorCars[index].Name;
//           document.querySelector("#content").append(h1);
//         }
//       })
//       .catch((err) => {
//         document.querySelector("#content").innerText = JSON.stringify(err);
//       })
//       .finally(() => {
//         document.querySelector("#spinner").style.display = "none";
//       });
//   });
// })();
