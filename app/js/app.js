import { Tab } from 'bootstrap';
import IMask from 'imask'; // Import Input mask

document.addEventListener('DOMContentLoaded', () => {
  require('./_swiper.js'); // Import Swiper
  require('./_calculator.js'); // Import Calculator

  // Apply phone mask for inputs
  const phoneInputs = document.querySelectorAll('input[type="phone"]');
  const maskOptions = {
    mask: '+{38} (000) 000-00-00',
  };

  phoneInputs.forEach((el) => {
    let mask = IMask(el, maskOptions);
  });

  // Mobile menu
  const headerEl = document.querySelector('.header');
  const burgerBtn = document.querySelector('.header-menu-burger .btn-burger');
  const mobileMenu = document.querySelector('.m-menu');

  burgerBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('_is-opened');
    headerEl.classList.toggle('_is-active');
    mobileMenu.classList.toggle('_is-shown');
  });

  // Sticky header
  const headerOffset = headerEl.clientHeight / 2;

  window.addEventListener('load', function () {
    stickyHeader();
  });

  window.addEventListener('scroll', function () {
    stickyHeader();

    if (this.oldScroll < this.scrollY) {
      headerEl.classList.add('_is-hidden');
    } else {
      headerEl.classList.remove('_is-hidden');
    }

    this.oldScroll = this.scrollY;
  });

  const stickyHeader = () => {
    if (window.pageYOffset > headerOffset) {
      headerEl.classList.add('_is-sticky');
    } else {
      headerEl.classList.remove('_is-sticky');
    }
  };
});
