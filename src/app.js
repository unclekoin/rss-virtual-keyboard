import Element from './core/classes/Element';
import themeToggle from './components/theme-toggle';
import display from './components/display';
import keyboard from './components/keyboard';
import virtualKeyboardHandler from './core/utils/virtual-keyboard-handler';
import keyboardHandler from './core/utils/keyboard-handler';

const app = new Element({
  cls: ['app']
}).element;

const container = new Element({
  cls: ['container']
}).element;

app.append( themeToggle, container);

export const createApp = (isCapsLock, lang) => {
  container.innerHTML = '';
  container.append(display(), keyboard(isCapsLock, lang));
  virtualKeyboardHandler();
}

createApp(false, 'en')

window.addEventListener('load', () => {
  virtualKeyboardHandler();
})

keyboardHandler();


export default app;
