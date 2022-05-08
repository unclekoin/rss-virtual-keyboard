import Element from '../../core/classes/Element';

const Display = () => {
  const { element } = new Element({
    tag: 'textarea',
    cls: ['display'],
  });

  element.setAttribute('inputmode', 'none');

  return element;
};

export default Display;
