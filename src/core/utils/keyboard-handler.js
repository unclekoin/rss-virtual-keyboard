import data from '../../data/data.json';
import display from '../../components/display/display';
import keyboard from '../../components/keyboard';
import app from '../../app';

const keyboardHandler = () => {
  document.addEventListener('keydown', (e) => {
    if(e.getModifierState("CapsLock")) {
      const newData = data.en.map((item) => item.length > 1 ? item : item.toUpperCase())
      app.innerHTML = ''
      app.append(display(), keyboard(newData))
    } else {
      const newData = data.ru.map((item) => item.length > 1 ? item.toLowerCase() : item)
      app.innerHTML = ''
      app.append(display(), keyboard(newData))
    }
  })
}

export default keyboardHandler;
