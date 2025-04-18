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

const setElementBtn1Styles = (element, styles) => {
  Object.assign(element.style, styles)
}

const hideElements = (...elements) => {
  elements.forEach(element => {
    element.style.display = 'none'
  })
}

button.addEventListener('click', () => {
  hideElements(element2, element3, element4)
  setElementBtn1Styles(element, { width: '99.7VW', height: '93VH' })
})

const setElementBtn2Styles = (element, styles) => {
  Object.assign(element.style, styles)
}

button2.addEventListener('click', () => {
  setElementBtn2Styles(element, { width: '49VW', height: '93VH' })
  setElementBtn2Styles(element2, { display: 'inline-block', height: '93VH' })
  setElementBtn2Styles(element3, { display: 'none' })
  setElementBtn2Styles(element4, { display: 'none' })
})

const setElementBtn3Styles = (element, styles) => {
  Object.assign(element.style, styles)
}

button3.addEventListener('click', () => {
  setElementBtn3Styles(element, { height: '45Vh', width: '49.5VW' })
  setElementBtn3Styles(element2, { display: 'inline-block', height: '45Vh', width: '49.5VW' })
  setElementBtn3Styles(element3, { display: 'inline-block', height: '45Vh', width: '99.7VW' })
  setElementBtn3Styles(element4, { display: 'none' })
})

const setElementBtn4Styles = (element) => {
  element.style.width = '49.6VW'
  element.style.height = '45Vh'
  element.style.display = 'inline-block'
}

button4.addEventListener('click', () => {
  setElementBtn4Styles(element)
  setElementBtn4Styles(element2)
  setElementBtn4Styles(element3)
  setElementBtn4Styles(element4)
  console.log('Hello')
})


// Добавление обработчика событий к кнопкам
const buttonTargets = [
  { button: button5, target: 'frame-main' },
  { button: button6, target: 'frame-additional' },
  { button: button7, target: 'frame-additional-top' },
  { button: button8, target: 'frame-additional-topleft' },
]

const setTargetForLinks = target => {
  for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('target', target)
  }
}

buttonTargets.forEach(({ button, target }) => {
  button.addEventListener('click', () => setTargetForLinks(target))
})
