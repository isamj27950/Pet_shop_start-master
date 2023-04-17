const burger = document.querySelector('#menu__burger');
const nav = document.querySelector('#menu__content');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
nav.addEventListener('click', () => {
    nav.classList.toggle('menu_display');
});