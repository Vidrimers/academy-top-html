import Swiper from 'swiper'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'

console.log('SLIDER-CLIENTS.JS РАБОТАЕТ')
;('use strict')

function clientsSlider() {
  let mySwiper = ''
  let breakpoint = window.matchMedia('(max-width: 767px)')
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }
      mySwiper = new Swiper('.clients__slider', {
        spaceBetween: 10,
        modules: [Pagination, Navigation, Autoplay],
        loop: true,
        pagination: {
          el: '.clients__slider-pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.clients__slider-button-next',
          prevEl: '.clients__slider-button-prev',
        },
      })
      return
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }
      mySwiper = new Swiper('.clients__slider', {
        modules: [Pagination, Navigation, Autoplay],
        loop: true,
        pagination: {
          el: '.clients__slider-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.clients__slider-button-next',
          prevEl: '.clients__slider-button-prev',
        },
      })
    }
  }
  breakpoint.addEventListener('change', breakpointChecker)
  breakpointChecker()
}

clientsSlider()
