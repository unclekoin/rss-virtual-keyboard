const toggleLanguage = (keyboard) => {
  let isShift = false;
  let isSpace = false;

  let isLanguage = false;

  document.addEventListener('keydown', (e) => {
    if (e.code === 'ShiftLeft') isShift = true;
    // console.log(isShift);
    if (e.code === 'Space') isSpace = true;
    // console.log(isSpace);
    if (isShift && isSpace) {
      isLanguage = true;
      // createApp(isLanguage);
      // console.log('lang:', isLanguage);
    }
  })

  document.addEventListener('keyup', (e) => {
    if (e.code === 'ShiftLeft') isShift = false;
    if (e.code === 'Space') isShift = false;
  });
}

export default toggleLanguage;
