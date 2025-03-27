let iframe = document.querySelector('.area-additional')
console.log(iframe.style);

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
});

const button2 = document.querySelector('#id2')
button2.addEventListener('click', () => {
        element.style.width = '49VW';
        element2.style.display = 'inline-block';
        element4.style.display = 'none';
        element3.style.display = 'none';
});

const button3 = document.querySelector('#id3')
button3.addEventListener('click', () => {
        element.style.width = '49.6VW';
        element.style.height = '45Vh';
        element2.style.display = 'inline-block';
        element3.style.display = 'inline-block';
        element2.style.height = '45Vh';
        element2.style.width = '49.6VW';
        element3.style.height = '45Vh';
        element3.style.width = '99.7VW';
        console.log("Hello")
});
