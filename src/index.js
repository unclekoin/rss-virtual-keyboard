import './index.scss';
import App from './app';
import Overlay from './components/overlay';
import Popup from './components/popup';

const body = document.body;
const overlay = Overlay();
const popup = Popup();
const btn = popup.querySelector('.popup__btn');

body.append(App, overlay, popup);

btn.addEventListener('click', () => {
  body.classList.add('popup-close');
});

overlay.addEventListener('click', () => {
  body.classList.add('popup-close');
});
