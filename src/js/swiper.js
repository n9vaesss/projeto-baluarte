var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1, 
    coverflowEffect: {
        rotate: 0,   
        stretch: 0,
        depth: 150,     
        modifier: 1,
        slideShadows: false,
    },
    spaceBetween: 80,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});