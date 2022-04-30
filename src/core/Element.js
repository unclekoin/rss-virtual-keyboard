export default class Element {
  #element;
  constructor(options) {
    this.#element = null;
    this.element = options.element;
    this.cls = options.cls;
    this.content = options.content || '';
    this.id = options.id || null;
    this.create();
  }

  get node() {
    return this.#element;
  }

  create() {
    const element = document.createElement(this.element);
    element.classList.add(...this.cls);
    if (this.content) element.textContent = this.content;
    if (this.id) element.id = this.id;
    this.#element = element;
  }
}
