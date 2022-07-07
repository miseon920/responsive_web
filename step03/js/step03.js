$(function () {
  $(".mopen button").click(function () {
    $(this).toggleClass("is-active");
    $("nav").toggleClass("on");
  });
});
