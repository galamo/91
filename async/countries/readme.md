# Fetch exmaple

```js
async function getCountries() {
  try {
    const result = await fetch("https://restcountries.com/v3.1/name/{name}");
    const json = await result.json();
    console.log(json);
  } catch (error) {
    swal({
      title: "Something went wrong!",
      text: "Please contact Snir!",
      icon: "error",
    });
  }
}

getCountries();
```

# Fetch ( ajax ) excercise & Homework

1. Use the following api: "https://pokeapi.co/api/v2/pokemon/{name}"
2. replace the countries api with pokemon api
3. draw the result from the api according our template

# Homework

Use the following APi https://dummyjson.com/docs/products

1. fetch all the products ( or limited )
2. draw the products
