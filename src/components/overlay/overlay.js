import Element from '../../core/classes/Element';

const Overlay = () => {
  const element = new Element({
    tag: 'div',
    cls: ['overlay']
  }).element;

  return element;
};

export default Overlay;
