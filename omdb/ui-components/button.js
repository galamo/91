function getButton(innerText) {
    const button = document.createElement("button");
    button.innerText = innerText;
    button.classList.add("btn", "btn-secondary");
    return button;
  }