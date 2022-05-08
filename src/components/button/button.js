import Element from '../../core/classes/Element';

const Button = (content) => {
  const btn = new Element({
    tag: 'button',
    cls: ['btn', 'btn-primary'],
    id: content.split(' ').join(''),
    content,
  });

  return btn.element;
};

export default Button;
