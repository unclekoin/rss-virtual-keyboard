import { createApp } from '../app';
let isCapsLock = false;
const virtualKeyboardHandler = () => {
    const display = document.querySelector('.display');
    const keyboard = document.querySelector('.keyboard');
    keyboard?.addEventListener('mousedown', ({ target }) => {
      if (target.id.length > 1) {
        switch (target.id) {
          case 'caps-lock':
            isCapsLock = !isCapsLock;
            createApp(isCapsLock);
            break;
          case 'space':
            display.value += ' ';
            break;
          case 'enter':
            display.value += '\n';
            break;
          case 'tab':
            display.value += '\t';
            break;
          case 'backspace':
          case 'del':
            display.value = display.value.slice(0, display.value.length - 1);
            break;
          case 'ctrl':
          case 'shift':
          case 'alt':
            return;
          default:
            return;
        }

      } else {
        display.value += target.textContent;
      }
    });

    keyboard?.addEventListener('mouseup', () => {
      display.focus();
    });
};

export default virtualKeyboardHandler;
