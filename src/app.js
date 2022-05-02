import Element from './core/classes/Element';
import ThemeToggle from './components/theme-toggle';
import Display from './components/display';
import Keyboard from './components/keyboard';
import virtualKeyboardHandler from './core/utils/virtual-keyboard-handler';
import keyboardHandler from './core/utils/keyboard-handler';
import toggleLanguage from './core/utils/toggle-language';

const app = new Element({
  cls: ['app']
}).element;

const container = new Element({
  cls: ['container']
}).element;

const themeToggle = ThemeToggle();
const display = Display();
let keyboard;

app.append( themeToggle, container);

export const createApp = (lang, isUpper, isShift) => {
  keyboard = Keyboard(lang, isUpper, isShift);
  container.innerHTML = '';
  container.append(display, keyboard);
  virtualKeyboardHandler();
}

createApp('en', false, false)

window.addEventListener('load', (e) => {
  virtualKeyboardHandler(display, keyboard);
  display.focus();
})

keyboardHandler(display);
toggleLanguage(keyboard);


export default app;
