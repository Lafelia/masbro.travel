$('.hero').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    accesibility: false,
    arrows: false,
    draggable: false,
    speed: 3000,
    cssEase: 'ease-in-out',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                autoplaySpeed: 2000,
                speed: 2000,
            }
        }
    ]
})