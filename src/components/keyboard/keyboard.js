import Element from '../../core/classes/Element';
import button from '../button';
import data from '../../data/data.json';

const keyboard = (isCapsLock = false, lang = 'en') => {
  const element = new Element({
    cls: ['keyboard']
  }).element;

  let isShift;

  data[lang][1].forEach((item) => {
    const content = isCapsLock && item.length === 1 ? item.toUpperCase() : item;
    let btn;

    if (content.includes('86')) {
      switch (content) {
        case '8679':
          btn = button('arrowup');
          break;
        case '8681':
          btn = button('arrowdown');
          break;
        case '8678':
          btn = button('arrowleft');
          break;
        case '8680':
          btn = button('arrowright');
          break;
      }
      btn.innerHTML = `&#${ content };`;
    } else  {
      btn = button(content);

      if (isCapsLock && content === 'caps lock') {
        btn.style.color = '#FD2BFF'
        btn.style.fontWeight = '500'
      };
      if (content === 'shift' && isShift) {
        btn.id = 'shiftright';
        btn.classList.add('second');
      }
      if (content === 'shift') isShift = true;
      if (content.length > 1) {
        btn.classList.add('btn-big', content.split(' ').join('-'));
      }
    }
    element.append(btn);
  });

  return element;
};

export default keyboard;
