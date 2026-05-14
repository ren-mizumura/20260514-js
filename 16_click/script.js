$(function() {
  // jQueryを記述
  $("a").click(function() {
    $(this).css("color", "#f00");
    return false;
  });
});