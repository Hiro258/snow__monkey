const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'slide',
    centeredSlides: true,
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    }
  })