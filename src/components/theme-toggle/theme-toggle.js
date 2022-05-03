import Element from '../../core/classes/Element';

const ThemeToggle = () => {
  const element = new Element({
    tag: 'button',
    cls: ['theme-toggle']
  }).element;

  const icon = new Element({
    tag: 'span',
    cls: ['theme-toggle__icon']
  }).element;

  icon.innerHTML = '&#9788;';
  element.append(icon);

  let isLight = true;

  element.addEventListener('click', () => {
    const app = document.querySelector('.app');
    app.classList.toggle('theme');
    isLight = !isLight
    icon.innerHTML = isLight ? '&#9788;' : '&#9790;';
  })

  return element;
}

export default ThemeToggle;
