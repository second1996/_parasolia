// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

import IMask from 'imask'; // Import Input mask

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
  require('./_swiper.js'); // Import Swiper

  // Apply phone mask for inputs
  const phoneInputs = document.querySelectorAll('input[type="phone"]');
  const maskOptions = {
    mask: '+{38} (000) 000-00-00',
  };

  phoneInputs.forEach((el) => {
    let mask = IMask(el, maskOptions);
  });
});
