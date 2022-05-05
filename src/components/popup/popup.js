import Element from '../../core/classes/Element';

const Popup = () => {
  const element = new Element({
    tag: 'div',
    cls: ['popup']
  }).element;

  const content = `
    <div>
        <button class="popup__btn">&times;</button>
        <h3>Дорогие коллеги!</h3>
        <ol>
          <li>Клавиатура разрабатывалась на macOS</li>
          <li><span>Начальное состояние:</span>
            <ul>
              <li>язык физической клавиатуры английский</li>
              <li>Caps Lock выключен</li>
            </ul>
          </li>
          <li>Для смены языка нажмите Shift + Alt или Shift + Option</li>
          <li>Клавиша Caps Lock переключает регистр</li>
          <li>Клавиша Shift переключает цифры и символы</li>
          <li>
          Виртуальная клавиатура реагирует на нажатие клавиш физической клавиатуры 
          если символы, язык и регистр на них совпадают
          </li>
          <li>Для повторного отображения этого сообщения перезагрузите страницу</li>
        </ol>
      </div>
    `;

  element.innerHTML = content;

  return element;
};

export default Popup;
