export default function decorate(block) {
  const heading = block.querySelector('h1, h2, h3');
  const description = block.querySelector('p');
  const picture = block.querySelector('picture');

  block.innerHTML = '';

  const hero = document.createElement('div');
  hero.className = 'hero-banner';

  if (picture) {
    hero.appendChild(picture);
  }

  const content = document.createElement('div');
  content.className = 'hero-content';

  content.innerHTML = `
    <h1>${heading ? heading.textContent : 'Welcome'}</h1>
    <p>${description ? description.textContent : ''}</p>
    <a href="#" class="hero-btn">Learn More</a>
  `;

  hero.appendChild(content);
  block.appendChild(hero);
}