var swiper = new Swiper(".mySwiper", {
direction: "vertical",
mousewheel: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
});

var swiper = new Swiper('.slider', {
    loop: true,
    mousewheel: false,
    slidesPerView: 1,

    pagination: {
    el: '.swiper-pagination',
    clickable: false
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

function move(n) {
    swiper.slideTo(n, 1000, false)
}
