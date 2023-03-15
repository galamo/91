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
// 1 - sending only one parameter string -> get the value (getter)
// 2 - sending 2 paramters string & uknown -> set the key with the value (setter)
// 3 - sending array of strings ( keys ) -> get multiple values (multiple getter)
// 4- sending object of key:value pairs -> set multiple keys  (multiple setter)
function userFn(a, b) {
  if (typeof a === "string") {
    if (b) {
      user[a] = b;
    } else {
      return user[a];
    }
  }

  if (Array.isArray(a)) {
    return a.map((c) => {
      return user[c];
    });
  }
  if (typeof a === "object") {
    // implementaiton multiple setter
  }
}
userFn(["name", "height", "lastName"]);
