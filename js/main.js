const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 17,
  speed: 800,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: false,
//   breakpoints: {
//     768: {
//         slidesPerView: 'auto',
//         spaceBetween: 8
//     },
//     991: {
//         slidesPerView: 2,
//         spaceBetween: 30
//     },
//     1192: {
//         slidesPerView: 3,
//         spaceBetween: 20
//     }
// }
});

new Swiper('.swiper-img', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 300,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});