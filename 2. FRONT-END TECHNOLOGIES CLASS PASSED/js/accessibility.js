$(document).ready(function () {
  var alreadyBigLetters = false;

  $("#accessToggle").on("change", function () {
    if (alreadyBigLetters) {
      $("p").css("font-size", "100%");
    } else {
      $("p").css("font-size", "120%");
    }
    alreadyBigLetters = !alreadyBigLetters;
  });
});