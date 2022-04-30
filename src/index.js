import './index.scss';
import app from './app';

const root = document.getElementById('root');

document.addEventListener('keydown', (e) => {
  console.log(e.key);
})

root.append(app);
