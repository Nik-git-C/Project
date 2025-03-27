let iframe = document.querySelector('.area-additional')
console.log(iframe.style);

const elementA = document.querySelectorAll('a')
const element = document.querySelector('.area-main')
const element2 = document.querySelector('.area-additional')
const element3 = document.querySelector('.area-additional-top')
const element4 = document.querySelector('.area-additional-top-left')
const button = document.querySelector('#id1');
button.addEventListener('click', () => {
        element4.style.display = 'none';
        element3.style.display = 'none';
        element2.style.display = 'none';
        element.style.width = '99.7VW';
        element.style.height = "93VH";
});

const button2 = document.querySelector('#id2')
button2.addEventListener('click', () => {
        element.style.width = '49VW';
        element.style.height = "93VH";
        element2.style.display = 'inline-block';
        element2.style.height = "93VH";
        element4.style.display = 'none';
        element3.style.display = 'none';
});

const button3 = document.querySelector('#id3')
button3.addEventListener('click', () => {
        element.style.height = '45Vh';
        element.style.width = '49.5VW';
        

        element2.style.display = 'inline-block';
        element2.style.height = '45Vh';
        element2.style.width = '49.5VW';

        element3.style.display = 'inline-block';
        element3.style.height = '45Vh';
        element3.style.width = '99.7VW';

        element4.style.display = 'none';
});

const button4 = document.querySelector('#id4')
button4.addEventListener('click', () => {
        element.style.width = '49.6VW';
        element.style.height = '45Vh';

        element2.style.height = '45Vh';
        element2.style.width = '49.6VW';
        element2.style.display = 'inline-block';

        element3.style.height = '45Vh';
        element3.style.width = '49.6VW';
        element3.style.display = 'inline-block';

        element4.style.height = '45Vh';
        element4.style.width = '49.6VW';
        element4.style.display = 'inline-block';
        console.log("Hello")
});

const button5 = document.querySelector('#id5')
button5.addEventListener('click', () => { // сделать функцию в которой атрибут target всех тегов <a> применит значение на frame-main
        elementA.setAttribute('target','frame-main')
});

const button6 = document.querySelector('#id6')
button6.addEventListener('click', () => { // сделать функцию в которой атрибут target всех тегов <a> применит значение на frame-additional
        elementA.setAttribute('target','frame-additional')
});

const button7 = document.querySelector('#id7')
button7.addEventListener('click', () => { // сделать функцию в которой атрибут target всех тегов <a> применит значение на frame-additional-top
        elementA.setAttribute('target','frame-additional-top')
});

const button8 = document.querySelector('#id8')
button8.addEventListener('click', () => { // сделать функцию в которой атрибут target всех тегов <a> применит значение на frame-additional-topleft
        elementA.setAttribute('target','frame-additional-topleft')
});
