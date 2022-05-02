import Element from '../../core/classes/Element';

const Display = () => {
  const element = new Element({
    tag: 'textarea',
    cls: ['display']
  })

  return element.element;
}

export default Display;
