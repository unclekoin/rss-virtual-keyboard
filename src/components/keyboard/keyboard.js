import Element from '../../core/classes/Element';
import button from '../button';
import data from '../../data/data.json';

const Keyboard = (lang, isUpper, isSpec) => {
  lang = 'en'
  const element = new Element({
    cls: ['keyboard']
  }).element;

  let isShift;
  let isCtrl;
  let isAlt;

  const modifiedData = data['en'][isUpper ? 1 : 0];
  let set = modifiedData;

  if (isSpec) {
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


      if (content === 'Shift' && isShift) {
        btn.id = 'ShiftRight';
        btn.classList.add('second');
      }
      if (content === 'Shift') isShift = true;

      if (content === 'Ctrl' && isCtrl) {
        btn.id = 'ControlRight';
      }
      if (content === 'Ctrl') isCtrl = true;

      if (content === 'Alt' && isAlt) {
        btn.id = 'AltRight';
      }
      if (content === 'Alt') isAlt = true;

      if (content.length > 1) {
        btn.classList.add('btn-big', content.toLowerCase().split(' ').join('-'));
      }
    }

    element.append(btn);
  });

  return element;
};

export default Keyboard;
