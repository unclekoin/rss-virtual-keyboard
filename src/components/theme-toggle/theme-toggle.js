import Element from '../../core/classes/Element';

const ThemeToggle = () => {
  let isLight = true;

  const { element } = new Element({
    tag: 'button',
    cls: ['theme-toggle'],
  });

  element.innerHTML = '<i class="bi bi-brightness-high theme-toggle__icon"></i>';

  element.addEventListener('click', () => {
    const app = document.querySelector('.app');
    app.classList.toggle('theme');
    isLight = !isLight;
    element.innerHTML = isLight
      ? '<i class="bi bi-brightness-high theme-toggle__icon"></i>'
      : '<i class="bi bi-moon-fill theme-toggle__icon"></i>';
  });

  return element;
};

export default ThemeToggle;
