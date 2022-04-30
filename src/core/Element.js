export default class Element {
  constructor(options) {
    this.element = options.element;
    this.cls = options.cls;
    this.content = options.content || '';
    this.id = options.id || null;
  }

  create() {
    const element = document.createElement(this.element);
    element.classList.add(...this.cls);
    if (this.content) element.textContent = this.content;
    if (this.id) element.id = this.id;
    return element;
  }
}
