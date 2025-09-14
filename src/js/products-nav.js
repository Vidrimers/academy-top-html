console.log('PRODUCTS-NAV.JS РАБОТАЕТ')

document.addEventListener('DOMContentLoaded', function () {
  const tabLinks = document.querySelectorAll('.products-links__item')
  const tabContents = document.querySelectorAll('.products__slider')

  tabLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault()

      tabLinks.forEach((item) => item.classList.remove('products-links__item--active'))
      tabContents.forEach((item) => item.classList.remove('products__slider--active'))

      this.classList.add('products-links__item--active')

      const targetId = this.getAttribute('href')
      const targetContent = document.querySelector(targetId)
      if (targetContent) {
        targetContent.classList.add('products__slider--active')
      }
    })
  })

  if (tabLinks.length > 0) {
    tabLinks[0].click()
  }
})
