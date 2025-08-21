export class UIMCP {
  constructor() {
    this.name = 'UI MCP';
    this.type = 'User Interface';
  }

  createComponent(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    return element;
  }

  addStyles(element, styles) {
    Object.assign(element.style, styles);
  }

  createButton(text, className, onClick) {
    const button = this.createComponent('button', className, text);
    if (onClick) button.addEventListener('click', onClick);
    return button;
  }

  createInput(type, placeholder, className, required = false) {
    const input = this.createComponent('input', className);
    input.type = type;
    input.placeholder = placeholder;
    input.required = required;
    return input;
  }

  createTextarea(placeholder, className, rows = 3) {
    const textarea = this.createComponent('textarea', className);
    textarea.placeholder = placeholder;
    textarea.rows = rows;
    return textarea;
  }
}

