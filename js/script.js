const brand = document.querySelector('.brand');
const navItem = document.querySelectorAll('.nav-item');
const package = document.querySelector('.package');
const call = document.querySelector('.call');
const button = document.querySelector('button');

button.addEventListener('click', function () {  
    if (window.innerWidth < 600) {
        window.scrollBy(0, 1193);        
    } else {
        window.scrollBy(0, 600);
    }
})