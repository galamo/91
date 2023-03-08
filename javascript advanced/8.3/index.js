function init() {
  drawCountriesSelect();
  drawCarsSelect();
}

init();

function drawCountriesSelect() {
  const onlyCountriesNames = countries.map((currentCountry) => {
    return {
      text: currentCountry.name.common,
      value: currentCountry?.flags?.svg,
    };
  });
  const select = getSelect(onlyCountriesNames, drawFlag);
  document.querySelector("#selectLocation").append(select);
  drawFlag(select.value);
}

function drawCarsSelect() {
  const carsa = cars.map((c) => {
    return {
      text: c.Name,
      value: c.Acceleration,
    };
  });
  const select = getSelect(carsa, drawAcceleration);
  document.querySelector("#selectLocation").append(select);
  drawAcceleration(select.value);
}

function drawAcceleration(acc) {
  document.querySelector("#acc").innerHTML = "";
  document.querySelector("#acc").innerHTML = acc;
}
function drawFlag(linkSrc) {
  const img = getImg(linkSrc);
  document.querySelector("#flag").innerHTML = "";
  document.querySelector("#flag").append(img);
}



