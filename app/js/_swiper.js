import Swiper, { Pagination, Navigation, EffectFade, Autoplay, Grid } from 'swiper';

Swiper.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

// Home page: Heroes slider
const heroesSwiper = new Swiper('.h-heroes-slider', {
  speed: 1000,
  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.h-heroes-slider-pagination',
    type: 'bullets',
    clickable: true,
  },
  allowTouchMove: false,
});

// Slider navigation
const sliderNavItem = document.querySelectorAll('.h-heroes-slider-nav-item');
const sliderDelay = heroesSwiper.params.autoplay.delay + heroesSwiper.params.speed;

if (sliderNavItem.length) {
  sliderNavItem[0].classList.add('_is-active');
}

sliderNavItem.forEach((el) => {
  el.querySelector('.progress-line').setAttribute('style', `animation-duration: ${sliderDelay}ms`);
  el.addEventListener('click', (event) => {
    let slideIndex = event.currentTarget.dataset.slideIndex;
    el.classList.add('_is-active');

    heroesSwiper.slideTo(slideIndex);
  });
});

heroesSwiper.on('slideChange', (swiper) => {
  sliderNavItem.forEach((el, index) => {
    el.classList.remove('_is-active');

    if (index === swiper.activeIndex) {
      el.classList.add('_is-active');
    }
  });
});

// Slider symbols
const heroesSymbol = document.querySelector('.h-heroes-symbol');
const sliderSymbols = document.querySelectorAll('.h-heroes-slider-symbols .symbol');

heroesSwiper.on('slideChangeTransitionStart', () => {
  heroesSymbol.classList.remove('_is-shown');
  heroesSymbol.classList.add('_is-hidden');

  sliderSymbols.forEach((el) => {
    el.classList.remove('_is-shown');
    el.classList.add('_is-hidden');
  });
});

heroesSwiper.on('slideChangeTransitionEnd', () => {
  heroesSymbol.classList.remove('_is-hidden');
  heroesSymbol.classList.add('_is-shown');

  sliderSymbols.forEach((el) => {
    el.classList.remove('_is-hidden');
    el.classList.add('_is-shown');
  });
});

// Page About: Partners slider
const partnersSwiper = new Swiper('.partners-slider', {
  slidesPerView: 2,
  grid: {
    fill: 'column',
    rows: 2,
  },
  navigation: {
    prevEl: '.partners-slider-nav .swiper-button-prev',
    nextEl: '.partners-slider-nav .swiper-button-next',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
  },
});
