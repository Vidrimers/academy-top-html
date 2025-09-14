import Swiper from 'swiper'
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css'

console.log('SLIDER-MAIN.JS РАБОТАЕТ')
;('use strict')

function mainSlider() {
  let mySwiper = ''
  let breakpoint = window.matchMedia('(max-width: 767px)')
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }
      mySwiper = new Swiper('.main-screen__slider', {
        spaceBetween: 10,
        modules: [Pagination, Scrollbar, Autoplay],
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        speed: 1000,
        pagination: {
          el: '.main-screen__slider-pagination',
          type: 'fraction',
        },
        scrollbar: {
          el: '.main-screen__slider-scrollbar',
          draggable: true,
        },
      })
      return
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }
      mySwiper = new Swiper('.main-screen__slider', {
        modules: [Pagination, Scrollbar, Autoplay],
        scrollbar: {
          el: '.main-screen__slider-scrollbar',
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        speed: 1000,
        pagination: {
          el: '.main-screen__slider-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>'
          },
        },
      })
    }
  }
  breakpoint.addEventListener('change', breakpointChecker)
  breakpointChecker()
}

mainSlider()
