var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  // Initialize Slick carousel with custom arrows
  $(".product-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    prevArrow: $(".arrow-left"), // Custom left arrow
    nextArrow: $(".arrow-right"), // Custom right arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show one item at a time on mobile
        },
      },
    ],
  });
});
