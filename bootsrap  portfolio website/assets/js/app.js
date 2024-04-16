// slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween:24,
    speed:1500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        }
    }
  });

 // scroll 
const scrollToTop = document.querySelector('.scroll-to-top')
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTop.style.display = "grid"
    } else {
        scrollToTop.style.display = "none"
    }
})
// aos
AOS.init();