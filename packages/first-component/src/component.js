import { html, LitElement } from 'lit-element';
import style from './styles.css';

class Component extends LitElement {
  static styles = style;

  static properties = {
    name: { type: String },
    alive: { type: Boolean },
    age: { type: Number },
  };

  render() {
    return html`
      <slot></slot>
      <p>Sample text… ${this.name}</p>
    `;
  }
}

export default Component;
