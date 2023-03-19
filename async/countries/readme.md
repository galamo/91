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
