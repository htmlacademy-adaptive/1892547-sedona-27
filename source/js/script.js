const nav = document.querySelector('.nav');
const logo = document.querySelector('.main-header__logo-img');
const toggle = document.querySelector('.nav__toggle');

nav.classList.remove('nav--nojs');
logo.classList.remove('main-header__logo-img--nojs');

toggle.addEventListener('click', () => {
  nav.classList.contains('nav--opened') ? nav.classList.remove('nav--opened') : nav.classList.add('nav--opened')
})
