const brand = document.querySelector('.brand');
const navItem = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', function (){
    const scroll = window.scrollY;

    if (scroll > 636) {
        brand.style.color = 'var(--primary)';

        navItem.forEach(function(nav){
            nav.style.color = 'var(--primary)';
        })
    } else {
        brand.style.color = 'var(--secondary)';
        navItem.forEach(function(nav){
            nav.style.color = 'var(--secondary)';
        })
    }

})

window.addEventListener('touchmove', function () {
    const scroll = window.scrollY;

    if (scroll > 569) {
        brand.style.color = 'var(--primary)';

        navItem.forEach(function(nav){
            nav.style.color = 'var(--primary)';
        })
    } else {
        brand.style.color = 'var(--secondary)';
        navItem.forEach(function(nav){
            nav.style.color = 'var(--secondary)';
        })
    }
})