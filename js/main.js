function scroll() {
    var navBar = document.getElementById('scroll-y');
    if (window.scrollY >= 400) {
        navBar.classList.add('navbar-active');
    } else {
        navBar.classList.remove('navbar-active');
    }

}
$(document).ready(function() {
    $(".blog").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHpverPause: true,
        dots: false,
        nav: true,
        navText: [$(".nav-left"), $(".nav-right")],
        responsive: {
            0: {
                items: 1,
                font: 10,
                margin: 10,
                center: true
                    // nav: false
            },
            600: {
                items: 2,
                // nav: false
            },
            1000: {
                items: 3,

                // nav: false
            }
        }


    });
});
$(document).ready(function() {
    $(".parent-our-team").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHpverPause: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,

                // nav: false
            },
            700: {
                items: 2,
                // height: 300,
                // nav: false
            },
            1000: {
                items: 3,

                // nav: false
            }
        }

    });
});
$(document).ready(function() {
    $(".container-gallary").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHpverPause: true,
        dots: false,
        nav: false,
        items: 5,
        responsive: {
            0: {
                items: 2,

                // nav: false
            },
            500: {
                items: 3,
                // height: 300,
                // nav: false
            },
            700: {
                items: 4,

                // nav: false
            },
            1000: {
                items: 5,

                // nav: false
            }
        }
    });
});