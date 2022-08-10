(function ($) {
  "use strict";

  $(window).on('load', function () {
    /* preloader activate */
    $(".preloader-activate").removeClass('preloader-active');
  });

  /* offcanvas menu active */
  $("#header-menu-trigger").on("click", function (e) {
    e.stopPropagation();
    $("#offcanvas-menu").toggleClass("active");
    $(".body-wrapper").toggleClass("active-overlay");
    $("body").toggleClass("overflow-hidden");
  });

  /* shop filter menu active */
  $("#filter-trigger").on("click", function (e) {
    e.stopPropagation();
    $("#shop-filter-menu").slideToggle();
  });

  $("#shop-filter-slideup").on("click", function (e) {
    e.stopPropagation();
    $("#shop-filter-menu").slideUp();
  });

  /* remove active class on click other parts of the body */
  $('body').on('click', function () {
    $("#offcanvas-menu").removeClass("active");
    $(".body-wrapper").removeClass("active-overlay");
    $("body").removeClass("overflow-hidden");
  });


})(jQuery);
