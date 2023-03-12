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
