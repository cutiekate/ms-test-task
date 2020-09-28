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
  nav: false,
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

function countdown(timeLeft) {
  let currentTime = timeLeft;

  setInterval(calculate, 1000);

  function calculate() {
    if (currentTime-- >= 0) {
      const days = parseInt((currentTime / 86400));
      const hours = parseInt((currentTime / 3600) % 24);
      const minutes = parseInt((currentTime / 60) % 60);
      const seconds = parseInt(currentTime % 60);

      document.getElementById('days').innerHTML
        = days.toString().padStart(2, '0');

      document.getElementById('hours').innerHTML
        = hours.toString().padStart(2, '0');

      document.getElementById('minutes').innerHTML
        = minutes.toString().padStart(2, '0');

      document.getElementById('seconds').innerHTML
        = seconds.toString().padStart(2, '0');
    } else {

    }
  }

  // function display(days, hours, minutes, seconds) {}
}

countdown(660);

function onClick(e) {

  const m = new Map(
    ['01', {
      imgSrc: '',
      text: 'lol',
    }],
    ['02', {
      imgSrc: '',
      text: 'lol',
    }],
    ['03', {
      imgSrc: '',
      text: 'lol',
    }],
  );

  const data = m[e.target.innerHTML];
  // find DOM
}
