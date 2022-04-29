import logo from './assets/images/logo.png';

const app = document.createElement('div');
app.className = 'app';

const container = document.createElement('div');
container.className = 'container';

const title = document.createElement('h1');
title.textContent = 'Webpack Starter';

const image = document.createElement('img');
image.src = logo;

container.append(title, image);

app.append(container);

export default app;
