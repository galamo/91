function init() {
  // gets all the elements by a tag name, return [] HTMLCollection
  const arrayOfH1 = window.document.getElementsByTagName("h1");
  console.log(arrayOfH1);
  console.log(arrayOfH1[0].innerText);
  console.log(arrayOfH1[0].innerHTML);

  const allListItems = document.getElementsByTagName("li");
  console.log(allListItems[0].style);
  //   allListItems[0].style.background = "yellow";

  const allButtons = document.getElementsByClassName("button_main");
  for (let index = 0; index < allButtons.length; index++) {
    allButtons[index].style.backgroundColor = "lightblue";
    allButtons[index].onclick = function () {
      const spanContainer = document.getElementById("selectedSpan");
      // spanContainer is equal to <span id="selectedSpan"> </span>
      // this refers to the LI item
      // spanContainer  refers to the element we catch from the dom by id
      spanContainer.innerText = this.innerText;
    };
  }
}

function changeColor() {
  const sheader = document.getElementById("secondHeader");
  if (sheader.style.backgroundColor === "red") {
    sheader.style.backgroundColor = "white";
  } else {
    sheader.style.backgroundColor = "red";
  }
}

function showAllText() {
  const mainHeader = document.getElementById("mainHeader");
  mainHeader.classList.remove("hiddenText");
}

function hideText() {
  const mainHeader = document.getElementById("mainHeader");
  mainHeader.classList.add("hiddenText");
}

function addStudent() {
  const ulStudents = document.getElementById("studentsList"); //ul
  const studentInput = document.getElementById("studentName"); // input
  const studentName = studentInput.value;
  const newLi = document.createElement("li");
  newLi.classList.add("list-group-item");
  const newButton = document.createElement("button");
  newButton.classList.add("btn", "btn-primary");
  newButton.innerText = studentName;
  newLi.append(newButton);
  ulStudents.append(newLi);
  studentInput.value = "";
}

init();
