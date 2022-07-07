$(function () {
  $(".main_slider").slick({
    arrows: false,
    autoplay: true,
    fade: true,
  });
  //$(".mbtn").on("click", () => $(".gnb").toggleClass("on"));
  $(".mbtn").click(function () {
    $(".gnb").toggleClass("on");
  });
  const gnb_a = $("#header.on .gnb > ul > li a");
  const w_w = $(window).width();
  $(gnb_a).click(function () {
    $(this)
      .siblings(".smenu")
      .stop()
      .slideToggle()
      .closest("li")
      .siblings()
      .find(".smenu")
      .slideUp();
    return false;
  });
  mob();
  $(window).resize(function () {
    mob();
    $(".smenu").removeAttr("style");
    $(".gnb").removeClass("on");
  });
});

function mob() {
  const w_w = $(window).width();
  if (w_w > 767) {
    $("#header").removeClass("on");
  } else {
    $("#header").addClass("on");
  }
}
