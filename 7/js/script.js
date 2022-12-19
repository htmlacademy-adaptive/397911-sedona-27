let navHeader = document.querySelector('.main-header');
let navMain = document.querySelector('.main-header__nav');
let navToggleShow = document.querySelector('.main-header__toggle');
let navToggleHide = document.querySelector('.main-nav__close');

navHeader.classList.remove('main-header--js-disabled');

navToggleShow.addEventListener('click', function () {
  navMain.classList.add('main-header__nav--opened');
});
navToggleHide.addEventListener('click', function () {
  navMain.classList.remove('main-header__nav--opened');
});
