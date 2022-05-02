const display = document.querySelector('.display');

const keyboardHandler = () => {
  document.addEventListener('keydown', (e) => {
    if (e.code !== 'ShiftRight') {
      document.getElementById(e.key.toLowerCase())?.classList.add('active');
    } else {
      document.getElementById(e.code.toLowerCase())?.classList.add('active');
    }

    // if(e.getModifierState("CapsLock")) {
    //   const newData = data.en.map((item) => item.length > 1 ? item : item.toUpperCase())
    //   app.innerHTML = ''
    //   app.append(display(), keyboard(newData))
    // } else {
    //   const newData = data.ru.map((item) => item.length > 1 ? item.toLowerCase() : item)
    //   app.innerHTML = ''
    //   app.append(display(), keyboard(newData))
    // }
  })

  document.addEventListener('keyup', (e) => {
    let button;

    if (e.code !== 'ShiftRight') {
      button = document.getElementById(e.key.toLowerCase())
    } else  {
      button = document.getElementById(e.code.toLowerCase())
    }
    if (button) button.classList.remove('active');
  })
}
export default keyboardHandler;
