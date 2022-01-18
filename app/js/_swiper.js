import Swiper, { Pagination, Navigation, EffectFade, Autoplay } from 'swiper';

Swiper.use([Pagination, EffectFade, Autoplay]);

const heroesSwiper = new Swiper('.h-heroes-slider', {
  autoplay: {
    delay: 3000,
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
});

// Slider navigation
const sliderNavItem = document.querySelectorAll('.h-heroes-slider-nav-item');

sliderNavItem[0].classList.add('_is-active');

sliderNavItem.forEach((el) => {
  el.querySelector('.progress-line').setAttribute(
    'style',
    `animation-duration: ${heroesSwiper.params.autoplay.delay + 250}ms`,
  );
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
