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
  const findTheUser = users.find((user) => user.email === email);
  if (!findTheUser) return;
  const findTheFlag = countries.find((c) => c.cca2 === findTheUser.nat);
  if (findTheFlag) {
    drawFlag(findTheFlag?.flags?.svg, findTheFlag.name.common);
    document.querySelector("#countriesSelect").value = findTheFlag?.flags?.svg;
  }

  // draw the user picture
  const img = getImg(findTheUser.picture.large);
  document.querySelector("#userPicture").innerHTML = "";
  document.querySelector("#userPicture").append(img);
}
function drawFlag(linkSrc, cn = "") {
  const img = getImg(linkSrc);
  document.querySelector("#flag").innerHTML = "";
  document.querySelector("#flag").append(img);
  document.querySelector("#flag").append(cn);
}
