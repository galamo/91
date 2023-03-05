console.log(countries);

function getCountryByName(countryName) {
  const countryIndex = countries.findIndex((currentCountry) => {
    return (
      currentCountry?.name.common?.toLowerCase() === countryName.toLowerCase()
    );
  });
  return countryIndex;
}

const index = getCountryByName("zmb");
console.log(countries[index]);

// country code OR by name
function getCountryByField(countryValue, field) {
    
}
