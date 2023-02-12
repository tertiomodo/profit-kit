// Sliders ----------------------------------------------------
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 1,
  speed: 800,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: false,
  breakpoints: {
    300: {
      allowTouchMove: true,
      slidesPerView: 1.05,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    730: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    1100: {
      allowTouchMove: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 14,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 16,
    },
  }
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

// Like button listener ----------------------------------------------------
const likeBtn = document.querySelectorAll('.like-interaction-btn');

likeBtn.forEach(e => {
  e.addEventListener('click', element => {
    const target = element.currentTarget;
    target.children[0].classList.toggle('like-active');
  })
});

// Counter listener ----------------------------------------------------
const counterWrap = document.querySelectorAll('.card__buttons-wrap');

counterWrap.forEach(element => {
  const btnMinus = element.querySelector('.btn-minus');
  const btnPlus = element.querySelector('.btn-plus');
  const counter = element.querySelector('.card__counter-number');
  const buyButton = element.querySelector('.card__button');

  btnMinus.addEventListener('click', () => {
    let number = +counter.textContent;
    if (number === 1) return;
    counter.textContent = --number;
  })

  btnPlus.addEventListener('click', () => {
    let number = +counter.textContent;
    counter.textContent = ++number;
  })

  buyButton.addEventListener('click', () => {
    counter.textContent = 1;
  })
});

// Card swap ----------------------------------------------------
const cards = document.querySelectorAll('.card');
const headerLink = document.querySelectorAll('.header__item-link');
const popular = document.querySelector('.link-popular');
const recently = document.querySelector('.link-recently');
const interesting = document.querySelector('.link-interesting');
const like = document.querySelectorAll('.like-interaction-btn');
const count = document.querySelectorAll('.card__counter-number');

recently.addEventListener('click', () => {
  headerLink.forEach(e => {
    e.classList.remove('link-active');
    recently.classList.add('link-active');
  })

  count.forEach(e => {
    e.textContent = 1;
  })

  like.forEach(e => {
    e.children[0].classList.remove('like-active');
  })

  cards.forEach(element => {
    const cardImg = element.querySelectorAll('.card__top-img');
    const cardDescr = element.querySelector('.card__product-name');
    const cardPrice = element.querySelector('.card__price');
    const cardTag = element.querySelectorAll('.card__top-tag');
    const oldPrice = element.querySelectorAll('.card__old-price');

    cardImg.forEach(e => {
      e.setAttribute('src', './assets/img/watch.jpg');
      e.setAttribute('alt', 'Умные часы SMARTWATCH XM 109 черный');
    })
    cardDescr.textContent = 'Умные часы SMARTWATCH XM 109 черный';
    cardPrice.textContent = '12 999 ₽';
    cardTag.forEach(e => {
      e.remove();
    })
    oldPrice.forEach(e => {
      e.remove();
    })
  });
});

interesting.addEventListener('click', () => {
  headerLink.forEach(e => {
    e.classList.remove('link-active');
    interesting.classList.add('link-active');
  })

  count.forEach(e => {
    e.textContent = 1;
  })

  like.forEach(e => {
    e.children[0].classList.remove('like-active');
  })

  cards.forEach(element => {
    const cardImg = element.querySelectorAll('.card__top-img');
    const cardDescr = element.querySelector('.card__product-name');
    const cardPrice = element.querySelector('.card__price');
    const cardTag = element.querySelectorAll('.card__top-tag');
    const oldPrice = element.querySelectorAll('.card__old-price');

    cardImg.forEach(e => {
      e.setAttribute('src', './assets/img/plant.jpg');
      e.setAttribute('alt', 'Кашпо для цветов керамическое СИМПЛГРЕЙ');
    })
    cardDescr.textContent = 'Кашпо для цветов керамическое СИМПЛГРЕЙ';
    cardPrice.textContent = '450 ₽';
    cardTag.forEach(e => {
      e.remove();
    })
    oldPrice.forEach(e => {
      e.remove();
    })
  });
});

popular.addEventListener('click', () => {
  window.location.reload();
});