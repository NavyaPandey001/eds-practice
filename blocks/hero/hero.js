export default function decorate(block) {
  const picture = block.querySelector('picture');
  const title = block.querySelector('h1, h2, h3');
  const text = block.querySelector('p');

  block.innerHTML = '';

  const hero = document.createElement('div');
  hero.className = 'hero-content';

  if (picture) hero.append(picture);
  if (title) hero.append(title);
  if (text) hero.append(text);

  block.append(hero);
}