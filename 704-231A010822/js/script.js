const track = document.querySelector('.track');
const slides = document.querySelectorAll('.track img');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let index = 0;

function showSlide(i) {
  if (i < 0) {
    index = slides.length - 1;
  } else if (i >= slides.length) {
    index = 0;
  } else {
    index = i;
  }

  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => showSlide(index + 1));
prevBtn.addEventListener('click', () => showSlide(index - 1));

setInterval(() => {
  showSlide(index + 1);
}, 3000);
