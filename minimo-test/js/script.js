document.addEventListener("DOMContentLoaded", () => {
  $(".js-main-banner").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: "ease",
  });

  $(".js-menu-btn").on("click", function () {
    $(".js-menu-btn").toggleClass("active");
    $(".js-menu-btn").fadeIn(100);
    $(this).fadeOut(100);
    $(".js-mobile-menu").toggleClass("active");
  });
});
