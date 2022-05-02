import { createApp } from '../../app';

const keyboardHandler = (display) => {
  const exceptions = ['ShiftRight', 'ControlRight', 'AltRight', 'Space'];

  document.addEventListener('keydown', (e) => {
    let isShift = e.shiftKey;
    let isUpper = e.shiftKey || e.getModifierState('CapsLock');
    if (e.key === 'Shift' || e.key === 'CapsLock') createApp(null, isUpper, isShift);
    if (e.key === 'Tab') {
      display.value += '\t';
    }

    if (exceptions.includes(e.code)) {
      document.getElementById(e.code)?.classList.add('active');
    } else {
      const key = e.key === 'Control' ? 'Ctrl' : e.key;
      document.getElementById(key)?.classList.add('active');
    }
  });

  document.addEventListener('keyup', (e) => {
    let isShift = e.shiftKey;
    let isUpper = e.shiftKey || e.getModifierState('CapsLock');
    if (e.key === 'Shift' || e.key === 'CapsLock') createApp(null, isUpper, isShift);
    let button;
    display.focus();
    if (exceptions.includes(e.code)) {
      button = document.getElementById(e.code);
    } else {
      const key = e.key === 'Control' ? 'Ctrl' : e.key;
      button = document.getElementById(key);
    }
    if (button) button.classList.remove('active');
  });
};

export default keyboardHandler;
