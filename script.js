// ==Start splide slider
// initialize
const splide = new Splide('.splide', {
	type: 'loop',
	autoplay: false,
  interval: 3000,
});

document.addEventListener('DOMContentLoaded', () => {
	splide.mount();
});

// Handle custom arrows
document.querySelector('.custom__arrow--prev').addEventListener('click', function () {
	splide.go('-');
});

document.querySelector('.custom__arrow--next').addEventListener('click', function () {
	splide.go('+');
});
// ==End splide slider

// ==Start nav handler
let prevScrollpos = window.pageYOffset;

window.onscroll = () => {

  let currentScrollPos = window.pageYOffset;
  const nav = document.querySelector(".navbar")

  if (prevScrollpos > currentScrollPos) {
    nav.style.opacity = "1";
    nav.style.visibility = 'visible';
  } else {
    nav.style.opacity = "0";
    nav.style.visibility = 'hidden';
  }
  prevScrollpos = currentScrollPos;

}
// ==Start nav handler