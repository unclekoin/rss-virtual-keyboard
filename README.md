# RSS Virtual Keyboard

```js
    if(e.getModifierState("CapsLock")) {
      const newData = data.en.map((item) => item.length > 1 ? item : item.toUpperCase())
      app.innerHTML = ''
      app.append(display(), keyboard(newData))
    } else {
      const newData = data.ru.map((item) => item.length > 1 ? item.toLowerCase() : item)
      app.innerHTML = ''
      app.append(display(), keyboard(newData))
    }
```
```js
      if (target.id === '8678' ) {
        console.log(display.value.length);
       console.log(x--)
        display.setSelectionRange(x, x)
        // display.focus()
      }
```
