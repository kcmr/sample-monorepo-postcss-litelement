import '@kuscamara/first-component';
import { html, LitElement } from 'lit-element';
import style from './styles.scss';

class Component extends LitElement {
  static styles = style;

  static properties = {
    name: { type: String },
    another: { type: String },
    enabled: { type: Boolean },
  };

  _handleButtonClick() {
    this.name = 'human';
  }

  render() {
    return html`
      <div class="block">
        <p class="block__element">hola mundo</p>
        <button @click=${this._handleButtonClick}>Click me</button>
        <first-component name=${this.name}></first-component>
      </div>
    `;
  }
}

export default Component;
