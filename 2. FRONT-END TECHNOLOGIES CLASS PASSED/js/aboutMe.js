function aboutMeElements() {
  $("#aboutMe1").text("I am | student(Erik | the code master)");
  $("#aboutMe2").text(
    "I am currently attending the CA for FET for the following education:"
  );
  $("#aboutMe3").text("BED1 JAN24 FT");
  $("#aboutMe1").click(function () {
    $("#aboutMe1").css({
      color: "white",
      "background-color": "powderblue",
    });
  });
  $("#aboutMe2").click(function () {
    $("#aboutMe2").css({
      color: "white",
      "background-color": "powderblue",
    });
  });
  $("#aboutMe3").click(function () {
    $("#aboutMe3").css({
      color: "white",
      "background-color": "powderblue",
    });
  });
}

aboutMeElements();

