(function ($) {
  ("use strict");

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });

  

  // main-menu
  const menu = document.querySelector(".menu");
  const menuMain = menu.querySelector(".menu-main");
  const goBack = menu.querySelector(".go-back");
  const menuTrigger = document.querySelector(".mobile-menu-trigger");
  const closeMenu = menu.querySelector(".mobile-menu-close");
  let subMenu;
  menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
      return;
    }
    if (e.target.closest(".menu-item-has-children")) {
      const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
    }
  });
  goBack.addEventListener("click", () => {
    hideSubMenu();
  })
  menuTrigger.addEventListener("click", () => {
    toggleMenu();
  })
  closeMenu.addEventListener("click", () => {
    toggleMenu();
  })
  document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
  })
  function toggleMenu() {
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
  }
  function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
  }

  function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
      subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".current-menu-title").innerHTML = "";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
  }

  window.onresize = function () {
    if (this.innerWidth > 991) {
      if (menu.classList.contains("active")) {
        toggleMenu();
      }

    }
  }


  // slider - active
  function mainSlider() {
    var BasicSlider = $(".slider-active");

    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });

    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );

    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      fade: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
          },
        },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  // testimonial active
  $(".testimonial-active").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
  // client-active
  $(".client-active").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    Infinity: true,
    nav: false,
    autoplay: true,
    smartSpeed: 700,
    autoplaySpeed: 700,
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  // software gallery
  $(".software-gallerly-active").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    Infinity: true,
    autoplay: true,
    smartSpeed: 700,
    autoplaySpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1300: {
        items: 4,
      },
    },
  });
  // software gallery
  $(".software-gallery").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    Infinity: true,
    autoplay: true,
    smartSpeed: 700,
    autoplaySpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1300: {
        items: 4,
      },
    },
  });

  // counterUp
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // WOW active
  new WOW().init();

  

  // scrollup
  $(function () {
    $.scrollUp({
      scrollName: "scrollUp",
      topDistance: "300",
      topSpeed: 300,
      animation: "fade",
      animationInSpeed: 200,
      animationOutSpeed: 200,
      scrollText: '<i class="fa fa-arrow-up"></i>',
      activeOverlay: false,
    });
  });

})(jQuery);
