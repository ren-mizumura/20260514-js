$(function() {
  // jQueryを記述
  // 1つ目の引数が乗せた時の処理
  // 2つ目の引数が離した時の処理
  $("a").hover(
    function() {
      $(this).css("color", "#f00");
    }
    , function() {
      $(this).css("color", "#0f0");
    }
  );
});