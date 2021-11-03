var swiper = new Swiper('.swiper-container.two', {
    // autoplay: {
    //     delay: 2500,
    //     stopOnLastSlide: true,
    //     disableOnInteraction: false,
    // },
    autoplay: 1500,
    autoplayDisableOnInteraction: false,
    delay: 1000,
    speed: 2500,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',

    grabCursor: true,
    coverflow: {
        rotate: 90,
        stretch: 40,
        depth: 200,
        modifier: 1.5,
        slideShadows: true,
    }
});