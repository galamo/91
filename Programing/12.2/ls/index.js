let num = window.localStorage.getItem("theNum") || 0;
function init() {
  document.getElementById("theNum").innerText = num;
}
init();
function increase() {
  num++;
  document.getElementById("theNum").innerText = num;
  window.localStorage.setItem("theNum", num);
}

// window.document => same like my below row
// document

// localStorage => same like my below row
// window.localStorage
