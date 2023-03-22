const url = "https://reqbin.com/echo/post/json";

const data = `{
  "Id": 78912,
  "Customer": "Jason Sweet",
  "Quantity": 1,
  "Price": 18.00
}`;

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
