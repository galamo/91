function init() {
  drawCountriesSelect();
  drawUsersSelect();
}

window.addEventListener("load", function (event) {
  init();
});

function drawCountriesSelect() {
  const onlyCountriesNames = countries.map((currentCountry) => {
    return {
      text: currentCountry.name.common,
      value: currentCountry?.flags?.svg,
    };
  });
  const select = getSelect(onlyCountriesNames, drawFlag);
  select.id = "countriesSelect";
  document.querySelector("#selectLocation").append(select);
  drawFlag(select.value);
}

function drawUsersSelect() {
  const usersNames = users.map((user) => {
    return {
      text: user.email,
      value: user.email,
    };
  });
  const select = getSelect(usersNames, drawPicture);
  document.querySelector("#selectLocation").append(select);
  drawPicture(select.value);
}
function drawPicture(email) {
  const findTheUser = users.find(function (user) {
    return user.email === email;
  });
  if (!findTheUser) return;
  const findTheFlag = countries.find((c) => c.cca2 === findTheUser.nat);
  console.log(findTheFlag.borders);

  const bordersToShow = [];
  for (let index = 0; index < findTheFlag.borders.length; index++) {
    bordersToShow.push(getCountryByCode(findTheFlag.borders[index]));
  }

  drawBorders(bordersToShow);

  if (findTheFlag) {
    drawFlag(findTheFlag?.flags?.svg, findTheFlag.name.common);
    document.querySelector("#countriesSelect").value = findTheFlag?.flags?.svg;
  }

  // draw the user picture
  const img = getImg(findTheUser.picture.large);
  document.querySelector("#userPicture").innerHTML = "";
  document.querySelector("#userPicture").append(img);
}
function drawFlag(linkSrc, cn = "", containerId = "flag", clear = true) {
  const img = getImg(linkSrc);
  if (clear) {
    document.querySelector(`#${containerId}`).innerHTML = "";
  }
  document.querySelector(`#${containerId}`).append(img);
}

function drawBorders(borders) {
  document.querySelector(`#borders`).innerHTML = "";
  for (let j = 0; j < borders.length; j++) {
    const img = getImg(borders[j]?.flags?.svg);
    document.querySelector(`#borders`).append(img);
  }
}

function getCountryByCode(code) {
  const currentCountry = countries.find((c) => c.cca3 === code);
  return currentCountry;
}
