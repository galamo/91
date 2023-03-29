function getInput(id, classNames) {
    if (!Array.isArray(classNames)) throw new Error("classNames is not a array!");
    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.classList.add(...classNames);
    return input;
  }