// 3. implement function that return all the countries according the currency sent, if the currency is used in the country return the country code / name

function getCountriesByCurrencyCode(currency) {
  // we are searching here by 3Code currency => ILS
  let countriesResult = [];
  for (let index = 0; index < countries.length; index++) {
    const currentCountry = countries[index];
    if (currentCountry?.currencies && currentCountry?.currencies[currency]) {
      countriesResult.push(currentCountry);
    }
  }
  return countriesResult.map((c) => {
    return { name: c?.name?.common, population: c.population };
  });
}

console.log(getCountriesByCurrencyCode("USD"));

function getCountriesByCurrencyName(currencyName) {
  // we are searching here by 3Code currency => ILS
  let countriesResult = [];
  for (let index = 0; index < countries.length; index++) {
    const currentCountry = countries[index];
    if (currentCountry?.currencies) {
      const cArray = Object.values(currentCountry?.currencies);
      const isCurrencyExist = cArray.some((currency) =>
        currency?.name?.includes(currencyName)
      );
      if (isCurrencyExist) {
        countriesResult.push(currentCountry);
      }
    }
  }
  return countriesResult.map((c) => {
    return { name: c?.name?.common, population: c.population };
  });
}

console.log(getCountriesByCurrencyName("d"));

// print all the keys & values from flags
// ??????????????????????????????????????
// ??????????????????????????????????????
// ??????????????????????????????????????
