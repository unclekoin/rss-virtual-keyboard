import Element from './core/classes/Element';
import Keyboard from './components/keyboard';
import ThemeToggle from './components/theme-toggle';
import Display from './components/display';

const App = new Element({
  cls: ['app']
}).element;

const container = new Element({
  cls: ['container']
}).element;

const themeToggle = ThemeToggle();
const display = Display();
const keyboard = new Keyboard(display);

const createApp = () => {
  keyboard.render();
  container.innerHTML = '';
  container.append(themeToggle, display, keyboard.keyboard);
  display.focus();
};

window.addEventListener('load', (e) => {
  App.append(container);
  createApp();
  display.focus();
});

export default App;
