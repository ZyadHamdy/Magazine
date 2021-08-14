const responsive = {
    0: { items: 1 },
    400: { items: 1 },
    660: { items: 2 },
    1100: { items: 3 }
}
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        Default: true,
        responsive: responsive
    });
});
AOS.init();