// 3. implement function that return all the countries according the currency sent, if the currency is used in the country return the country code / name

function getCountriesByCurrency(currency) {
  // we are searching here by 3Code currency => ILS
  let countriesResult = [];
  for (let index = 0; index < countries.length; index++) {
    const currentCountry = countries[index];
    console.log(JSON.stringify(currentCountry?.currencies));
    if (currentCountry?.currencies && currentCountry?.currencies[currency]) {
      countriesResult.push(currentCountry);
    }
  }
  return countriesResult.map((c) => {
    return { name: c?.name?.common, population: c.population };
  });
}

console.log(getCountriesByCurrency("USD"));


// print all the keys & values from flags key 
// Objects.<QUESTION> ? 
// options:
// keys
// values
// entries 
 