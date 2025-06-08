import { LitElement, html, css, unsafeCSS } from 'lit';
import { getAccordionStyles } from '../../src/accordion-styles.js';

export class LitAccordion extends LitElement {
  static properties = {
    title: { type: String },
    open: { type: Boolean, reflect: true }
  };

  static styles = css`${unsafeCSS(getAccordionStyles({
    headerBackground: '#f0f4ff',
    headerHoverBackground: '#e0e8ff',
    titleColor: '#324fff',
    iconColor: '#324fff'
  }))}`;


  constructor() {
    super();
    this.title = 'Acordeón';
    this.open = false;
  }

  toggle() {
    this.open = !this.open;
  }

  render() {
    return html`
      <div class="accordion">
        <div class="accordion-header" @click=${this.toggle}>
          <h3 class="accordion-title">${this.title}</h3>
          <div class="accordion-icon"></div>
        </div>
        <div class="accordion-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('lit-accordion', LitAccordion);
