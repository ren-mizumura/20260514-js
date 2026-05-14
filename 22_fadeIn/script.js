$(function() {
  // jQueryを記述
  // $(window).click(function() {
  //   $("p").fadeIn();
  // })

  //速度指定
  // $(window).click(function() {
  //   $("p").fadeIn(3000);
  // })

  // 終了後の処理の指定
  $(window).click(function() {
    $("p").fadeIn(function() {
      $(this).css("color", "#f00");
    });
  })
});