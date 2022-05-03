import Element from './core/classes/Element';
import Keyboard from './components/keyboard';
import ThemeToggle from './components/theme-toggle';
import Display from './components/display';
import toggleLanguage from './core/utils/toggle-language';

const app = new Element({
  cls: ['app']
}).element;

const container = new Element({
  cls: ['container']
}).element;

const themeToggle = ThemeToggle();
const display = Display();
const keyboard = new Keyboard(display);

keyboard.virtualHandler();
keyboard.physicalHandler();

const createApp = (props) => {
  keyboard.render(props);
  container.innerHTML = '';
  container.append(themeToggle, display, keyboard.keyboard);
  display.focus();
};

window.addEventListener('load', (e) => {
  app.append(container);
  createApp({
    lang: 'en',
    isUpper: false,
    isShift: false
  });
  // keyboardHandler(display, keyboard);
  toggleLanguage(keyboard);
  display.focus();
});


export default app;
