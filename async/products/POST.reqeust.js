const url = "https://reqbin.com/echo/post/json";

const data = `{
  "Id": 78912,
  "Customer": "Jason Sweet",
  "Quantity": 1,
  "Price": 18.00
}`;

// const response = await fetch(url, { method: "GET" });
// const response = await fetch(url); //GET

async function test() {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: data,
  });

  const text = await response.text();
  console.log(text);
}
test();

// // POST Create movie Example:
// const data1 = `{
//   movieId: "movieId",
//   length: "120",
//   title: "Rafi is annoying",
//   type: "Horror",
//   rentalPrice: "10$",
//   year: 2023,
// }`;

// const response = await fetch("https://movies.admin/create", {
//   method: "POST",
//   body: data1,
// });
