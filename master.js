let menuicon= document.querySelector('#menu-icon')
let navbar= document.querySelector('.navbar')

menuicon.addEventListener("click", (eo) => {
  menuicon.classList.toggle('bx-x')
  navbar.classList.toggle('open')
})

