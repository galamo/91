function getSelect(optionsArray, handler) {
    const select = document.createElement("select");
    select.addEventListener("change", function () {
      handler(this.value);
    });
    const options = optionsArray.map((currentOption) => {
      const optionUI = document.createElement("option");
      optionUI.innerText = currentOption.text;
      optionUI.value = currentOption.value;
      return optionUI;
    });
    select.append(...options);
    return select;
  }