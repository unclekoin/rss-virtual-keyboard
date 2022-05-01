import Element from '../../core/classes/Element';

const display = () => {
  const element = new Element({
    tag: 'textarea',
    cls: ['display']
  })

  return element.element;
}

export default display;
