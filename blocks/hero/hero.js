export default function decorate(block) {
  const slides = [...block.children];

  slides.forEach((slide, index) => {
    slide.classList.add('slide');

    if (index === 0) {
      slide.classList.add('active');
    }
  });

  let current = 0;

  const prev = document.createElement('button');
  prev.innerHTML = '&#10094;';

  const next = document.createElement('button');
  next.innerHTML = '&#10095;';

  prev.className = 'carousel-btn prev';
  next.className = 'carousel-btn next';

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  prev.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  next.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  block.append(prev, next);
}