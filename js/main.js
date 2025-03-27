let iframe = document.querySelector('.area-additional')
console.log(iframe.style)

const links = document.querySelectorAll('a')
const element = document.querySelector('.area-main')
const element2 = document.querySelector('.area-additional')
const element3 = document.querySelector('.area-additional-top')
const element4 = document.querySelector('.area-additional-top-left')

const button = document.querySelector('#id1')
const button2 = document.querySelector('#id2')
const button3 = document.querySelector('#id3')
const button4 = document.querySelector('#id4')
const button5 = document.querySelector('#id5')
const button6 = document.querySelector('#id6')
const button7 = document.querySelector('#id7')
const button8 = document.querySelector('#id8')

button.addEventListener('click', () => {
  element4.style.display = 'none'
  element3.style.display = 'none'
  element2.style.display = 'none'

  element.style.width = '99.7VW'
  element.style.height = '93VH'
})

button2.addEventListener('click', () => {
  element.style.width = '49VW'
  element.style.height = '93VH'

  element2.style.display = 'inline-block'
  element2.style.height = '93VH'
  element4.style.display = 'none'
  element3.style.display = 'none'
})

button3.addEventListener('click', () => {
  element.style.height = '45Vh'
  element.style.width = '49.5VW'
  element2.style.display = 'inline-block'
  element2.style.height = '45Vh'
  element2.style.width = '49.5VW'

  element3.style.display = 'inline-block'
  element3.style.height = '45Vh'
  element3.style.width = '99.7VW'

  element4.style.display = 'none'
})

button4.addEventListener('click', () => {
  element.style.width = '49.6VW'
  element.style.height = '45Vh'

  element2.style.height = '45Vh'
  element2.style.width = '49.6VW'
  element2.style.display = 'inline-block'

  element3.style.height = '45Vh'
  element3.style.width = '49.6VW'
  element3.style.display = 'inline-block'

  element4.style.height = '45Vh'
  element4.style.width = '49.6VW'
  element4.style.display = 'inline-block'
  console.log('Hello')
})

button5.addEventListener('click', () => {
  for (let i = 1; i < links.length; i++) {
    links[i].setAttribute('target', 'frame-main')
  }
})

button6.addEventListener('click', () => {
  for (let i = 1; i < links.length; i++) {
    links[i].setAttribute('target', 'frame-additional')
  }
})

button7.addEventListener('click', () => {
  for (let i = 1; i < links.length; i++) {
    links[i].setAttribute('target', 'frame-additional-top')
  }
})

button8.addEventListener('click', () => {
  for (let i = 1; i < links.length; i++) {
    links[i].setAttribute('target', 'frame-additional-topleft')
  }
})
