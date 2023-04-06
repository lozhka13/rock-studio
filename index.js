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



const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});