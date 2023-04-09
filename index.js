'use strict';


const allCards = document.querySelectorAll('.card');

const allFilters = document.querySelector('.our-courses__list');
const allButtonFilter = allFilters.children[0];
const vocalButtonFilter = allFilters.children[1];
const guitarButtonFilter = allFilters.children[2];
const drumsButtonFilter = allFilters.children[3];
const keysButtonFilter = allFilters.children[4];

function selectedOff() {
  allButtonFilter.classList.remove('selected');
  vocalButtonFilter.classList.remove('selected');
  guitarButtonFilter.classList.remove('selected');
  drumsButtonFilter.classList.remove('selected');
  keysButtonFilter.classList.remove('selected');
}

allButtonFilter.addEventListener('click', (e) => {
  selectedOff();
  e.target.classList.add('selected');
  for (let elem of allCards) {
    elem.style.display = 'block';
  }
})

vocalButtonFilter.addEventListener('click', (e) => {
  selectedOff();
  e.target.classList.add('selected');
  for (let elem of allCards) {
    if (elem.getAttribute('data-instrument') == 'vocal') {
      elem.style.display = 'block';
    }
    else {
      elem.style.display = 'none';
    }
  }
})

guitarButtonFilter.addEventListener('click', (e) => {
  selectedOff();
  e.target.classList.add('selected');
  for (let elem of allCards) {
    if (elem.getAttribute('data-instrument') == 'guitar') {
      elem.style.display = 'block';
    }
    else {
      elem.style.display = 'none';
    }
  }
})

drumsButtonFilter.addEventListener('click', (e) => {
  selectedOff();
  e.target.classList.add('selected');
  for (let elem of allCards) {
    if (elem.getAttribute('data-instrument') == 'drums') {
      elem.style.display = 'block';
    }
    else {
      elem.style.display = 'none';
    }
  }
})

keysButtonFilter.addEventListener('click', (e) => {
  selectedOff();
  e.target.classList.add('selected');
  for (let elem of allCards) {
    if (elem.getAttribute('data-instrument') == 'keys') {
      elem.style.display = 'block';
    }
    else {
      elem.style.display = 'none';
    }
  }
})



const swiper = new Swiper('.swiper-1', {
  slidesPerView: 3,

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

var swiper1 = new Swiper(".swiper-2", {
  slidesPerView: 3,

  spaceBetween: 15,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});