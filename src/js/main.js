
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    speed: 500,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
    },
  
  });