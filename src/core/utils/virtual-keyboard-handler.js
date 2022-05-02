const virtualKeyboardHandler = (display, keyboard) => {
    keyboard?.addEventListener('mousedown', ({ target }) => {
      if (target.id.length > 1) {
        switch (target.id) {
          case 'CapsLock':
            console.log('Caps Lock');
            break;
          case 'Space':
            display.value += ' ';
            break;
          case 'Enter':
            display.value += '\n';
            break;
          case 'Tab':
            display.value += '\t';
            break;
          case 'Backspace':
          case 'Del':
            display.value = display.value.slice(0, display.value.length - 1);
            break;
          case 'ctrl':
          case 'shift':
          case 'alt':
            return;
          case 'ArrowUp':
            display.value += '↑'
            break;
          case 'ArrowDown':
            display.value += '↓'
            break;
          case 'ArrowLeft':
            display.value += '←'
            break;
          case 'ArrowRight':
            display.value += '→'
            break;
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
