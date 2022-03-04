// adaptive navbar onsroll and work wave
window.onscroll = function () {
  scrollFunction()
}

const navbar = document.querySelector('#navbar')
const wave = document.querySelector('#wave__one')
const miniCart = document.querySelector('#mini-cart')

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.style['background'] = 'rgb(0, 0, 0, 0.8)'
    navbar.style['height'] = '8vh'
    navbar.style['backdrop-filter'] = 'blur(5px)'
    wave.classList.add('wave__one__new')
    miniCart.style['background'] = 'rgba(170, 170, 170, 0)'

  } else {
    navbar.style['background'] = ''
    navbar.style['height'] = '12vh'
    navbar.style['backdrop-filter'] = 'none'
    wave.classList.remove('wave__one__new')
    wave.classList.add('.wave__one')
    miniCart.style['background'] = 'rgba(170, 170, 170, 0.4)'
  }
}

// quantuty selector product item
window.addEventListener('click', (event) => {

  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterWrapper =  event.target.closest('.counter-wrapper')
    const counter = counterWrapper.querySelector('[data-counter]')

    if (event.target.dataset.action === 'plus') {
      counter.innerText++
    }

    if (event.target.dataset.action === 'minus') {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText--
      }
    }
  }
  
})

// modal-cart-window 


