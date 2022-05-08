import Element from '../../core/classes/Element';

const Popup = () => {
  const { element } = new Element({
    tag: 'div',
    cls: ['popup'],
  });

  const content = `
    <div>
        <button class="popup__btn">&times;</button>
        <h3>Дорогие коллеги!</h3>
        <ol>
          <li>Клавиатура разрабатывалась на <code>macOS</code></li>
          <li><span>Начальное состояние:</span>
            <ul>
              <li>язык физической клавиатуры английский</li>
              <li><code>Caps Lock</code> выключен</li>
            </ul>
          </li>
          <li>Для смены языка нажмите <code>Shift + Alt</code> или <code>Shift + Option</code></li>
          <li>Клавиша <code>Caps Lock</code> переключает регистр</li>
          <li>Клавиша <code>Shift</code> переключает цифры и символы</li>
          <li>
          Виртуальная клавиатура реагирует на нажатие клавиш физической клавиатуры 
          если символы, язык и регистр совпадают
          </li>
          <li>Для повторного отображения этого сообщения перезагрузите страницу</li>
        </ol>
      </div>
    `;

  element.innerHTML = content;

  return element;
};

export default Popup;
