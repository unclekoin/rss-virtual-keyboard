import Element from '../../core/Element';
import data from '../../core/data.json';
import button from '../button';

const keyboard = () => {
  const element = new Element({
    element: 'div',
    cls: ['keyboard']
  }).create();

  let isShift;

  data.en.forEach((content) => {
    const btn = button(content);
    if (content === 'shift' && isShift) btn.classList.add('second');
    if (content === 'shift') isShift = true;
    if (content.length > 1) {
      btn.classList.add('btn-text-sm', content.split(' ').join('-'))
    };

    element.append(btn);
  });

  return element;
};

export default keyboard;
