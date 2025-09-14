import Swiper from 'swiper'
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css'

console.log('SLIDER-PRODUCTS.JS РАБОТАЕТ')

function productsSlider() {
  let mySwiper = ''
  const breakpoint319 = window.matchMedia('(max-width: 319px)')
  const breakpoint479 = window.matchMedia('(max-width: 479px)')
  const breakpoint767 = window.matchMedia('(max-width: 767px)')
  const breakpoint991 = window.matchMedia('(max-width: 991px)')

  function breakpointChecker() {
    if (breakpoint319.matches) {
      if (mySwiper) mySwiper.destroy(true, true)
      mySwiper = new Swiper('.products__slider', {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 16,
        modules: [Pagination, Scrollbar, Autoplay],
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.products__slider-pagination',
          type: 'fraction',
        },
        scrollbar: {
          el: '.products__slider-scrollbar',
          draggable: true,
        },
        navigation: {
          nextEl: '.products__slider-button-next',
          prevEl: '.products__slider-button-prev',
        },
      })
    } else if (breakpoint479.matches) {
      if (mySwiper) mySwiper.destroy(true, true)
      mySwiper = new Swiper('.products__slider', {
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 20,
        modules: [Pagination, Scrollbar, Autoplay],
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.products__slider-pagination',
          type: 'fraction',
        },
        scrollbar: {
          el: '.products__slider-scrollbar',
          draggable: true,
        },
        navigation: {
          nextEl: '.products__slider-button-next',
          prevEl: '.products__slider-button-prev',
        },
      })
    } else if (breakpoint767.matches) {
      if (mySwiper) mySwiper.destroy(true, true)
      mySwiper = new Swiper('.products__slider', {
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 24,
        modules: [Pagination, Scrollbar, Autoplay],
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.products__slider-pagination',
          type: 'fraction',
        },
        scrollbar: {
          el: '.products__slider-scrollbar',
          draggable: true,
        },
        navigation: {
          nextEl: '.products__slider-button-next',
          prevEl: '.products__slider-button-prev',
        },
      })
    } else if (breakpoint991.matches) {
      if (mySwiper) mySwiper.destroy(true, true)
      mySwiper = new Swiper('.products__slider', {
        slidesPerGroup: 1,
        slidesPerView: 4,
        spaceBetween: 30,
        modules: [Pagination, Scrollbar, Autoplay],
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
      })
    } else {
      // Основной слайдер
      if (mySwiper) mySwiper.destroy(true, true)
      mySwiper = new Swiper('.products__slider', {
        modules: [Pagination, Scrollbar, Autoplay],
        loop: true,
        slidesPerGroup: 1,
        slidesPerView: 5,
        spaceBetween: 31,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
      })
    }
  }

  breakpoint319.addEventListener('change', breakpointChecker)
  breakpoint479.addEventListener('change', breakpointChecker)
  breakpoint767.addEventListener('change', breakpointChecker)
  breakpoint991.addEventListener('change', breakpointChecker)
  breakpointChecker()
}

productsSlider()
