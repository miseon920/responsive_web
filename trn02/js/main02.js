$(function () {
  function closeBanner() {
    $(".TopBanner").slideToggle(); // 제이쿼리
    //$('.TopBanner').toggleClass('on');
    //document.querySelector('.TopBanner').classList.toggle('on')  // 생자스
  }
  $(".TopBanner i").on("click", closeBanner);

  //  const,var,let closeBanner = () => {
  //      //$('.TopBanner i').toggleClass('on');  // 제이쿼리
  //      document.querySelector('.TopBanner').classList.toggle('on')  // 생자스
  //  }
  //  $('.TopBanner i').on('click', closeBanner);

  //$('.TopBanner i').on('click', function () {
  //    $('.TopBanner').hide();  //제이쿼리 메소드
  //})

  $(".MainSlider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEsing: "linear",
  });
  $(".ProductSlider").slick({
    arrows: false,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //     },
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
    ],
  });
  $(".pop li").on("click", toggleClass);
  //$(".customer li").on("click", toggleClass);
  $(".xi-close").on("click", function () {
    $(".popup").removeClass("on");
    $(".pop li").removeClass("on");
  });
  $(".mopen").on("click", function () {
    $(this).toggleClass("on");
    $(".Gnb").toggleClass("on");
    if ($(this).hasClass("on") == true) {
      on_bg();
    } else {
      off_bg();
    }
  });
  $(".search_bt").on("click", function () {
    $("#searchForm").addClass("on");
    on_bg();
  });
  $(".sclose_bt").on("click", function () {
    $("#searchForm").removeClass("on");
    off_bg();
  });
});

function toggleClass() {
  //console.log($(this)); this = event.currentTarget;
  $(this).toggleClass("on");
  $(".Footer .popup").toggleClass("on");
  return false;
}

function on_bg() {
  $("html,body").css({ overflow: "hidden" });
  $(".Wrapper").addClass("on");
}
function off_bg() {
  $("html,body").css({ overflow: "visible" });
  $(".Wrapper").removeClass("on");
}
