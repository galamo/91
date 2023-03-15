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
let i = 0;
(function () {
  document.querySelector("#increase").addEventListener("click", function () {
    i++;
    this.innerText = `clickme ${i}`;
  });
  document.querySelector("#getCars").addEventListener("click", function () {
    document.querySelector("#spinner").style.display = "block";
    document.querySelector("#content").innerText = "";
    console.log("event listener");
    fetchCarsFromServer2(220)
      .then((carrrs) => {
        document.querySelector("#content").innerText = JSON.stringify(carrrs);
      })
      .catch((err) => {
        document.querySelector("#content").innerText = JSON.stringify(err);
      })
      .finally(() => {
        document.querySelector("#spinner").style.display = "none";
      });
  });
})();
