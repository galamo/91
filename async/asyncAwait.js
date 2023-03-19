// async
// await

async function getCars() {
  console.log("SCript Start getCars");
  const resolveAnswer = await fetchCarsFromServer2(220);
  console.log("SCript End getCars");
}

let i = 0;
(function () {
  document.querySelector("#increase").addEventListener("click", function () {
    i++;
    this.innerText = `clickme ${i}`;
  });
  document
    .querySelector("#getCars")
    .addEventListener("click", async function () {
      document.querySelector("#spinner").style.display = "block";
      document.querySelector("#content").innerText = "";
      console.log("event listener");
      try {
        const result = await fetchCarsFromServer2(220); // 20 sec
        for (let index = 0; index < result.length; index++) {
          const h1 = document.createElement("h1");
          h1.innerText = result[index].Name;
          document.querySelector("#content").append(h1);
        }
      } catch (error) {
        console.log("Something went wrong " + error);
      } finally {
        document.querySelector("#spinner").style.display = "none";
      }
      console.log("async await");
    });
})();
