import Element from '../../core/classes/Element';
import button from '../button';
import data from '../../data/data.json';

class Keyboard {
  constructor(display) {
    this.element = new Element({ cls: ['keyboard'] }).element;
    this.display = display;
    this.isUpper = false;
    this.isShift = false;
    this.lang = 'en';
  }

  render() {
    this.element.innerHTML = '';
    let hasShift;
    let hasCtrl;
    let hasAlt;

    const modifiedData = data[this.lang][this.isUpper ? 1 : 0];
    let set = modifiedData;

    if (this.isShift) {
      set = [...data.spec, ...modifiedData.slice(13)];
      set[27] = '|';
      if (this.lang === 'en') [set[25], set[26]] = ['{', '}'];
    }

    set.forEach((content) => {
      let btn;
      if (content.includes('86')) {
        switch (content) {
          case '8679':
            btn = button('ArrowUp');
            break;
          case '8681':
            btn = button('ArrowDown');
            break;
          case '8678':
            btn = button('ArrowLeft');
            break;
          case '8680':
            btn = button('ArrowRight');
            break;
        }
        btn.innerHTML = `&#${ content };`;
      } else {
        btn = button(content);

        if (content === 'Shift' && hasShift) {
          btn.id = 'ShiftRight';
          btn.classList.add('second');
          this.isShift ? btn.classList.add('active') : btn.classList.remove('active');
        }
        if (content === 'Shift') {
          hasShift = true;
          this.isShift ? btn.classList.add('active') : btn.classList.remove('active');
        }

        if (content === 'Ctrl' && hasCtrl) {
          btn.id = 'ControlRight';
        }
        if (content === 'Ctrl') hasCtrl = true;

        if (content === 'Alt' && hasAlt) {
          btn.id = 'AltRight';
        }
        if (content === 'Alt') hasAlt = true;

        if (content === 'Caps Lock') {
          this.isUpper ? btn.classList.add('active') : btn.classList.remove('active');
        }

        if (content.length > 1) {
          btn.classList.add('btn-big', content.toLowerCase().split(' ').join('-'));
        }
      }

      this.element.append(btn);
    });
  }

  virtualHandler() {
    this.element.addEventListener('click', ({ target }) => {
      if (target.className.includes('keyboard')) return;
      if (target.id.length > 1) {
        switch (target.id) {
          case 'CapsLock':
            this.isUpper = !target.className.includes('active');
            this.render({ isUpper: this.isUpper });
            break;
          case 'Space':
            this.display.value += ' ';
            break;
          case 'Enter':
            this.display.value += '\n';
            break;
          case 'Tab':
            this.display.value += '\t';
            break;
          case 'Backspace':
          case 'Del':
            this.display.value = this.display.value.slice(0, this.display.value.length - 1);
            break;
          case 'Shift':
          case 'ShiftRight':
            this.isShift = !target.className.includes('active');
            this.render();
            break;
          case 'Ctrl':
          case 'Alt':
            return;
          case 'ArrowUp':
            this.display.value += '↑';
            break;
          case 'ArrowDown':
            this.display.value += '↓';
            break;
          case 'ArrowLeft':
            this.display.value += '←';
            break;
          case 'ArrowRight':
            this.display.value += '→';
            break;
          default:
            return;
        }
      } else {
        this.display.value += target.textContent;
      }
      this.display.focus();
    });
  }

  physicalHandler() {
    const exceptions = ['ShiftRight', 'ControlRight', 'AltRight', 'Space'];

    const keydownHandler = (e) => {
      this.isShift = e.shiftKey;
      this.isUpper = e.getModifierState('CapsLock');
      if (e.key === 'Shift') this.render();
      if (e.key === 'CapsLock') this.render();
      if (e.key === 'Tab') {
        this.display.value += '\t';
      }

      if (exceptions.includes(e.code)) {
        document.getElementById(e.code)?.classList.add('active');
      } else {
        const key = e.key === 'Control' ? 'Ctrl' : e.key;
        document.getElementById(key)?.classList.add('active');
      }
    };

    const keyupHandler = (e) => {
      this.isShift = e.shiftKey;
      this.isUpper = e.getModifierState('CapsLock');
      if (e.key === 'Shift') this.render();
      if (e.key === 'CapsLock') this.render();
      let button;
      this.display.focus();
      if (exceptions.includes(e.code)) {
        button = document.getElementById(e.code);
      } else {
        const key = e.key === 'Control' ? 'Ctrl' : e.key;
        button = document.getElementById(key);
      }
      if (button) button.classList.remove('active');
    };

    document.addEventListener('keydown', keydownHandler);
    document.addEventListener('keyup', keyupHandler);
  }

  get keyboard() {
    return this.element;
  }
}

export default Keyboard;
