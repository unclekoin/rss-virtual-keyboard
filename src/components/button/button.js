import Element from '../../core/Element';

const button = (content) => {
  const btn = new Element({
    element: 'button',
    cls: ['btn', 'btn-primary'],
    id: content.split(' ').join('-'),
    content
  })

  return btn.create()
}

export default button;

