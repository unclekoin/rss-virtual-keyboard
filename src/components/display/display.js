import Element from '../../core/Element';

const display = () => {
  const element = new Element({
    element: 'textarea',
    cls: ['display']
  })

  return element.node;
}

export default display;
