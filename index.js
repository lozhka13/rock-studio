'use strict';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: false,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});