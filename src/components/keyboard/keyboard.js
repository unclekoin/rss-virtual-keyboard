import Element from '../../core/Element';
import button from '../button';
import data from '../../core/data.json';

const keyboard = (isCapsLock = false, lang = 'en') => {
  const element = new Element({
    element: 'div',
    cls: ['keyboard']
  }).node;

  let isShift;

  data[lang].forEach((item) => {
    const content = isCapsLock && item.length === 1 ? item.toUpperCase() : item;
    const btn = button(content);

    if (isCapsLock && content === 'caps lock') {
      btn.style.color = '#0AEFFF'
      btn.style.fontWeight = '500'
    };
    if (content === 'shift' && isShift) btn.classList.add('second');
    if (content === 'shift') isShift = true;
    if (content.length > 1) {
      btn.classList.add('btn-text-sm', content.split(' ').join('-'));
    }
    ;
    if (content.includes('86')) {
      btn.innerHTML = `&#${ content };`;
    }

    element.append(btn);
  });

  return element;
};

export default keyboard;
