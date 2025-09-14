document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.site-nav__button')
  const menuList = document.querySelector('.site-nav__list')
  const body = document.body
  const menuLinks = document.querySelectorAll('.site-nav__list')

  if (menuBtn && menuList) {
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('site-nav__button--active')
      menuList.classList.toggle('site-nav--closed')
      body.classList.toggle('lock')
    })
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      menuBtn.classList.remove('site-nav__button--active')
      menuList.classList.remove('site-nav__list--active')
      body.classList.remove('lock')