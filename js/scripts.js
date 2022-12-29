/*!
 * Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav')
    if (!navbarCollapsible) {
      return
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  }

  // Shrink the navbar
  navbarShrink()

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink)

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav')
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    })
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler')
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  )
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click()
      }
    })
  })

  const emailForm = document.getElementById('email-form')
  const emailName = document.getElementById('email-name')
  const emailTextArea = document.getElementById('email-textarea')
  const emailButton = document.getElementById('email-button')

  const emailFormIsValid  = () => {
    return emailTextArea.value.length > 0 && emailName.value.length > 0
  }

  emailName.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !emailFormIsValid()) e.preventDefault()
  })

  emailForm.addEventListener('input', () => {
    if (emailTextArea.value.length > 0 && emailName.value.length > 0) {
      emailButton.classList.remove('disabled')
    } else {
      emailButton.classList.add('disabled')
    }
  })

  emailButton.addEventListener('click', () => {
    const niceName = emailName.value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    window.open(
      `mailto:info@enterprojektering.com?subject=Anbudsförfrågan&body=${emailTextArea.value}%0D%0A%0D%0AMed vänlig hälsning,%0D%0A${niceName}`
    )
  })

  document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !(window.location.toString()).includes('#signup') && emailName.value.length === 0 && emailTextArea.value.length === 0) {
      event.preventDefault()
      window.location = document.getElementById('nav-item-contact').href
    }
  })
})
