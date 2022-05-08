export default class Element {
  #element;

  #tag;

  #cls;

  #content;

  constructor({
    tag = 'div', cls = [], content = '', id = null,
  }) {
    this.#element = null;
    this.#tag = tag;
    this.#cls = cls;
    this.#content = content;
    this.id = id;
    this.create();
  }

  get element() {
    return this.#element;
  }

  create() {
    const element = document.createElement(this.#tag);
    element.classList.add(...this.#cls);
    if (this.#content) element.textContent = this.#content;
    if (this.id) element.id = this.id;
    this.#element = element;
  }
}
