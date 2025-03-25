let iframe = document.querySelector('.iframe2')
console.log(iframe.style);

const element = document.querySelector('.iframe1');
const element2 = document.querySelector('.iframe2');
const button = document.querySelector('.button1');
button.addEventListener('click', () => {
element.style.width = '99.7VW';
});

const button2 = document.querySelector('.button2');
button2.addEventListener('click', () => {
        element.style.width = '49VW';
        element2.style.display = 'inline-block';
});

