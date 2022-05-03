import Element from '../../core/classes/Element';
import button from '../button';
import data from '../../data/data.json';

class Keyboard {
  constructor() {
    this.element = new Element({ cls: ['keyboard'] }).element;
    this.isUpper = false;
  }

  render({ lang, isUpper, isShift }) {
    lang = 'en';
    this.element.innerHTML = '';
    let hasShift;
    let hasCtrl;
    let hasAlt;

    const modifiedData = data['en'][isUpper ? 1 : 0];
    let set = modifiedData;

    if (isShift) {
      set = [...data.spec, ...modifiedData.slice(13)];
      set[27] = '|';
      if (lang === 'en') [set[25], set[26]] = ['{', '}'];
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
        }
        if (content === 'Shift') hasShift = true;

        if (content === 'Ctrl' && hasCtrl) {
          btn.id = 'ControlRight';
        }
        if (content === 'Ctrl') hasCtrl = true;

        if (content === 'Alt' && hasAlt) {
          btn.id = 'AltRight';
        }
        if (content === 'Alt') hasAlt = true;

        if (content === 'Caps Lock') {
          console.log(isUpper);
          isUpper ? btn.classList.add('active') : btn.classList.remove('active');
        }

        if (content.length > 1) {
          btn.classList.add('btn-big', content.toLowerCase().split(' ').join('-'));
        }
      }

      this.element.append(btn);
    });
  }

  handler(display) {
    this.element.addEventListener('click', ({ target }) => {
      if (target.id.length > 1) {
        switch (target.id) {
          case 'CapsLock':
            this.isUpper = !target.className.includes('active');
            this.render({ isUpper: this.isUpper });
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
            display.value += '↑';
            break;
          case 'ArrowDown':
            display.value += '↓';
            break;
          case 'ArrowLeft':
            display.value += '←';
            break;
          case 'ArrowRight':
            display.value += '→';
            break;
          default:
            return;
        }
      } else {
        display.value += target.textContent;
      }
      // display.focus();
    });
  }

  get keyboard() {
    return this.element;
  }
}

export default Keyboard;
