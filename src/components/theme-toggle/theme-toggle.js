import Element from '../../core/classes/Element';

const ThemeToggle = () => {
  const element = new Element({
    tag: 'span',
    cls: ['theme-toggle']
  }).element;

  const icon = new Element({
    tag: 'i',
    cls: ['fa-solid', 'fa-sun', 'theme-toggle__icon']
  }).element;

  element.append(icon);

  element.addEventListener('click', () => {
    const app = document.querySelector('.app');
    app.classList.toggle('theme');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
  })

  return element;
}

export default ThemeToggle;
