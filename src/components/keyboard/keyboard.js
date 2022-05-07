import Element from '../../core/classes/Element';
import button from '../button';
import data from '../../data/data.json';
import { calculatePosition } from '../../core/utils/calculate-position';

class Keyboard {
  constructor(display) {
    this.element = new Element({ cls: ['keyboard'] }).element;
    this.display = display;
    this.isUpper = false;
    this.isShift = false;
    this.isAlt = false;
    this.prevPosition = 0;
    this.lang = localStorage.getItem('keyboardLanguage') || 'en';
    this.virtualHandler();
    this.physicalHandler();
  }

  render() {
    this.element.innerHTML = '';
    let hasShift;
    let hasCtrl;
    let hasAlt;

    localStorage.setItem('keyboardLanguage', this.lang);

    const modifiedData = data[this.lang];

    modifiedData.forEach((content) => {
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
      } else if (content.length > 1 && !content.includes('86') && !Array.isArray(content)) {
        btn = button(content);
        btn.classList.add('btn-big', content.toLowerCase().split(' ').join('-'));

        if (content === 'Del') btn.id = 'Delete';

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

        if (content === 'Backslash') btn.innerHTML = '\\';
      } else {
        const data = Array.isArray(content) ? content[this.isShift ? 1 : 0] : content;

        if (this.isUpper) {
          btn = button(data.toUpperCase());
        } else {
          btn = button(data);
        }
      }

      this.element.append(btn);
    });
  }

  virtualHandler() {
    this.element.addEventListener('click', ({ target }) => {
      this.isArrow = false;
      let start = this.display.selectionStart;
      let end = this.display.selectionEnd;
      let newPosition = 0;
      const { colIndex, rowIndex, array, displayLength } = calculatePosition(start, this.display.value);

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
            const offset = start === end && start ? start - 1 : start;
            this.display.value =
              this.display.value.slice(0, offset) +
              this.display.value.slice(end);
            this.display.setSelectionRange(offset, offset);
            break;
          case 'Delete':
            this.display.value =
              this.display.value.slice(0, start) +
              this.display.value.slice(end === start ? end + 1 : end);
            this.display.setSelectionRange(start, start);
            break;
          case 'Shift':
          case 'ShiftRight':
            this.isShift = !target.className.includes('active');
            this.render();
            break;
          case 'Alt':
            if (this.isShift) {
              this.lang = this.lang === 'en' ? 'ru' : 'en';
              this.render();
            } else {
              return;
            }
            break;
          case 'Backslash':
            this.display.value += '\\';
            break;
          case 'Ctrl':
            return;
          case 'ArrowUp':
            if (colIndex || array[rowIndex]) this.prevPosition = colIndex;
            if (array[rowIndex - 1] === '') {
              newPosition = start - colIndex - 1;
            } else if (!colIndex && array[rowIndex - 1] !== undefined) {
              newPosition = this.prevPosition > array[rowIndex - 1].length
                ? start - 1
                : start - array[rowIndex - 1].length - 1 + this.prevPosition;
            } else {
              if (array[rowIndex - 1] && array[rowIndex - 1].length >= array[rowIndex].length) {
                newPosition = start - (array[rowIndex].length + 1) - (array[rowIndex - 1].length - array[rowIndex].length);
              } else {
                newPosition = colIndex > array[rowIndex - 1]?.length
                  ? start - colIndex - 1
                  : start - (array[rowIndex - 1]?.length + 1);
              }
            }
            this.display.setSelectionRange(newPosition, newPosition);
            break;
          case 'ArrowDown':
            newPosition = array[rowIndex + 1] !== undefined && colIndex <= array[rowIndex + 1].length
              ? start + (array[rowIndex].length + 1)
              : displayLength;

            if (array[rowIndex + 1] !== undefined && colIndex > array[rowIndex + 1].length) {
              newPosition = start + (array[rowIndex].length - colIndex) + array[rowIndex + 1].length + 1;
            }

            if (!array[rowIndex]) newPosition = start + this.prevPosition + 1;
            this.display.setSelectionRange(newPosition, newPosition);
            if (colIndex) this.prevPosition = colIndex;
            break;
          case 'ArrowLeft':
            if (start) start--;
            this.display.setSelectionRange(start, start);
            if (colIndex) this.prevPosition = colIndex;
            break;
          case 'ArrowRight':
            start++;
            this.display.setSelectionRange(start, start);
            if (colIndex) this.prevPosition = colIndex;
            break;
          default:
            return;
        }
      } else {
        this.display.value += target.id;
      }
      this.display.focus();
    });
  }

  physicalHandler() {
    const exceptions = ['ShiftRight', 'ControlRight', 'AltRight', 'Space'];

    const keydownHandler = (e) => {
      this.display.focus();
      this.isShift = e.shiftKey;
      this.isAlt = e.altKey;
      this.isUpper = e.getModifierState('CapsLock');

      if (e.key === 'Shift') this.render();
      if (e.key === 'CapsLock') this.render();

      if (this.isAlt && this.isShift) {
        this.lang = this.lang === 'en' ? 'ru' : 'en';
        this.render();
      }

      if (e.key === 'Tab') {
        this.display.value += '\t';
      }

      if (e.code === 'Backslash' && !this.isShift) {
        document.getElementById(e.code)?.classList.add('active');
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

      if (e.code === 'Backslash' && !this.isShift) {
        document.getElementById(e.code)?.classList.remove('active');
      }

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
