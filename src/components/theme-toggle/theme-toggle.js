import Element from '../../core/classes/Element';

const themeToggle = () => {
  const element = new Element({
    tag: 'span',
    cls: ['theme-toggle']
  }).element;

  element.innerHTML = '<i class="fa-solid fa-sun theme-toggle__icon"></i>'

  element.addEventListener('click', () => {
    const app = document.querySelector('.app');
    const icon = document.querySelector('.fa-solid');
    app.classList.toggle('theme');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
  })

  return element;
}

export default themeToggle();
