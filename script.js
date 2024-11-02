const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function initializeCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;

  let currentIndex = 0;

  function showNextSlide() {
      slides[currentIndex].style.opacity = '0';
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].style.opacity = '1';
  }

  slides[currentIndex].style.opacity = '1';
  setInterval(showNextSlide, 5000);
}


document.querySelector('#burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav-links').classList.toggle('active');
  document.querySelector('.nav-product').classList.toggle('active');
});


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
