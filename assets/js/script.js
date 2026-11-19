AOS.init({
    duration: 800,
    once: true,
    });

    new Swiper(".destSwiper", {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".dest-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});