$(function() {
  // jQueryを記述
  $("p").click(function() {
    $(this).fadeOut(5000, function() {
      alert("FadeOutしました。");
    });
  })
});