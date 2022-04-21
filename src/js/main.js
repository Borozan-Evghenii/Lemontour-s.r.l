
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
    },
  
});




//modal

const btn = document.querySelectorAll('.button');
const modal = document.querySelector('.modal');
const closed =document.querySelector('.modal-window_control__closed')

btn.forEach((el) =>{
  el.addEventListener('click', (e) =>{
    let path = e.currentTarget.getAttribute('data-path');
    modal.classList.add('modal-visible')
    body.style.overflow = "hidden"
  });
});

closed.addEventListener('click', (e)=> {
  modal.classList.remove('modal-visible')
  body.style.overflow = "auto"
});
modal.addEventListener('click', (e)=> {
  modal.classList.remove('modal-visible')
  body.style.overflow = "auto"
});


