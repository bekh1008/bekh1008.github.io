const loader = document.querySelector('.loader');

const main = document.querySelector('.main');
const body = document.querySelector('body');

function init(){
    setTimeout(() =>{
        loader.style.opacity = 0;
        loader.style.display = 'none';
        body.style.background = 'none';

        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1 , 50);
    }, 2000);
}

init();