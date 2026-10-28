export default function decorate(block) {
  block.classList.add('hero-loaded');

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to My Custom Page';

  const description = document.createElement('p');
  description.textContent = 'This hero section is rendered using a custom EDS block.';

  block.innerHTML = '';
  block.append(heading, description);
}