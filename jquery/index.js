$(function () {
  $(".draggable").draggable();
  console.log("the document is ready!");
  //   show currentelement from javascript
  console.log($("#countries"));
  $("#countries").css({ color: "red", backgroundColor: "pink" });
  // on = addEventListener
  const cJquery = $("#countries");
  cJquery.get(0).addEventListener("click", function () {
    // change my size
    $("#countries").css("fontSize", "80px");
  });
  //   document.querySelector("#countries").style.color = "green";
  //   document.querySelector("#countries").style.backgroundColor = "blue";

  $("li").on("click", function () {
    alert("Boooo");
  });

  $("#show").on("click", function () {
    $(".content").fadeToggle();
  });
});

function getImg(src, width = 400) {
  const height = 200;
  const img = $("<img/>").attr({ width, height, src: src });
  return img;
}

const user = { name: "Avi", lastName: "Pessah", height: "1.83" };
// function userFn(a = מאפיין, b = ערך) {
function userFn(a, b) {
  if (typeof a === "string") {
    if (typeof b === "string") {
      user[a] = b;
    } else {
      return user[a];
    }
  }
  if (Array.isArray(a)) {
    
  }
}
