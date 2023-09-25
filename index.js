document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // Sticky navbar on scroll script
        if (window.scrollY > 20) {
            document.querySelector(".navbar").classList.add("sticky");
        } else {
            document.querySelector(".navbar").classList.remove("sticky");
        }

        window.onload = function() {
             window.scrollTo(0, 0);
            }

        // Scroll-up button show/hide script
        if (window.scrollY > 500) {
            document.querySelector(".scroll-up-btn").classList.add("show");
        } else {
            document.querySelector(".scroll-up-btn").classList.remove("show");
        }
    });

    // Slide-up script
    document.querySelector(".scroll-up-btn").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Removing smooth scroll on slide-up button click
        document.documentElement.style.scrollBehavior = "auto";
    });

    var menuItems = document.querySelectorAll(".navbar .menu li a");
    menuItems.forEach(function (item) {
        // Smooth scroll on Menu Items click
        item.addEventListener("click", function () {
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // Toggle Navbar
    document.querySelector(".menu-btn").addEventListener("click", function () {
        var menu = document.querySelector(".navbar .menu");
        menu.classList.toggle("active");
        var menuIcon = document.querySelector(".menu-btn i");
        menuIcon.classList.toggle("active");
    });

    // Typing Text Animation
    var options = {
        strings: ["Fullstack Developer", "Software Developer,Backend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };
    var typed = new Typed(".typing", options);
    var typed2 = new Typed(".typing-2", options);

    // Owl Carousel
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: false
          }
        }
      });

});
