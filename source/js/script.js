const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav__toggle');

nav.classList.remove('nav--nojs');

toggle.addEventListener('click', () => {
  nav.classList.contains('nav--opened') ? nav.classList.remove('nav--opened') : nav.classList.add('nav--opened')
})
