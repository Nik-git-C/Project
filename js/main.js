let iframe = document.querySelector('.area-additional')
console.log(iframe.style);

const element = document.querySelector('.area-main')
const element2 = document.querySelector('.area-additional')
const button = document.querySelector('#id1');
button.addEventListener('click', () => {
        element2.style.display = 'none';
        element.style.width = '99.7VW';
        console.log("Hello world");
});

const button2 = document.querySelector('#id2')
button2.addEventListener('click', () => {
        element.style.width = '49VW';
        element2.style.display = 'inline-block';
});
