const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

var swiper = new Swiper(".slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  });