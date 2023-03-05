console.log(countries);

function getCountryByName(countryName) {
  return countries.find((currentCountry) => {
    return (
      currentCountry?.name.common?.toLowerCase() === countryName.toLowerCase()
    );
  });
}

function getCountryByCode(countryName) {
  return countries.find((currentCountry) => {
    return currentCountry?.cca3?.toLowerCase() === countryName.toLowerCase();
  });
}

const index = getCountryByName("zmb");
console.log(countries[index]);

// country code OR by name
function getCountryByField(countryValue, field) {
  switch (field) {
    case "code": {
      return getCountryByCode(countryValue);
    }
    case "name": {
      return getCountryByName(countryValue);
    }
    default: {
      throw new Error("No field!");
    }
  }
}

console.log(getCountryByField("israel", "name"));
