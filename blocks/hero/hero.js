export default function decorate(block) {
  block.classList.add('hero-loaded');

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to My Custom Page';

  const description = document.createElement('p');
  description.textContent = 'This hero section is rendered using a custom EDS block.';

  block.innerHTML = '';
  block.append(heading, deexport default function decorate(block) {
    const rows = [...block.children];

    const title = rows[0]?.textContent?.trim() || '';
    const description = rows[1]?.textContent?.trim() || '';
    const picture = block.querySelector('picture');

    block.innerHTML = '';

    const hero = document.createElement('div');
    hero.className = 'hero-loaded';

    hero.innerHTML = `
    <div class="hero-overlay">
      <h1>${title}</h1>
      <p>${description}</p>
    </div>
  `;

    if (picture) {
      hero.prepend(picture);
    }

    block.append(hero);
  }scription);
}