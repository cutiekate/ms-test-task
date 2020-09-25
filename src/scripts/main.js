/* eslint-disable strict */

// eslint-disable-next-line strict
// eslint-disable-next-line no-undef
// eslint-disable-next-line strict
// eslint-disable-next-line no-undef
// eslint-disable-next-line strict
// eslint-disable-next-line no-undef
$(document).ready(function() {
  // eslint-disable-next-line no-undef
  $('.owl-carousel').owlCarousel();
});

// eslint-disable-next-line no-undef
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
