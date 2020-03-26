const hamburger = document.querySelector('.nav__burger');
const sideNav = document.querySelector('#sideNav');

hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle('active');
  sideNav.classList.toggle('is-active');
})