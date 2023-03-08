function init() {
  const onlyCountriesNames = countries.map((currentCountry) => {
    return {
      text: currentCountry.name.common,
      value: currentCountry.cca3,
    };
  });
  document
    .querySelector("#selectLocation")
    .append(drawSelect(onlyCountriesNames));

  const carsArray = cars.map((car) => {
    return { text: car.Name, value: car.Name };
  });

  document.querySelector("#selectLocation").append(drawSelect(carsArray));
}

init();

function drawSelect(optionsArray) {
  const select = document.createElement("select");
  const options = optionsArray.map((currentOption) => {
    const optionUI = document.createElement("option");
    optionUI.innerText = currentOption.text;
    optionUI.value = currentOption.value;
    return optionUI;
  });
  select.append(...options);
  return select;
}
