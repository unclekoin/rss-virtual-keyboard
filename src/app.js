import keyboard from './components/keyboard';

const app = document.createElement('div');
app.className = 'container';

app.append(keyboard());

export default app;
