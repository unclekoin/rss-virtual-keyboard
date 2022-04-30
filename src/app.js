import Element from './core/Element';
import display from './components/display';
import keyboard from './components/keyboard';
import virtualKeyboardHandler from './utilities/virtual-keyboard-handler';
import keyboardHandler from './utilities/keyboard-handler';

const app = new Element({
  element: 'div',
  cls: ['container']
}).node;

export const createApp = (isCapsLock, lang) => {
  app.innerHTML = '';
  app.append(display(), keyboard(isCapsLock, lang));
  virtualKeyboardHandler();
}

createApp(false, 'ru')

window.addEventListener('load', () => {
  virtualKeyboardHandler();
})

keyboardHandler();


export default app;
