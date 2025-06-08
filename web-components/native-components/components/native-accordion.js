import { getAccordionStyles } from '../../src/accordion-styles.js';

class NativeAccordion extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({ mode: 'open' });
    
    this._open = false;
    
    this.styleConfig = {
      headerBackground: '#fff4f0',
      headerHoverBackground: '#ffe6dd',
      titleColor: '#ff3e00',
      iconColor: '#ff3e00'
    };
  }
  
  static get observedAttributes() {
    return ['title', 'open'];
  }
  
  connectedCallback() {
    const title = this.getAttribute('title') || 'Acordeón';
    this._open = this.hasAttribute('open');
    
    this.render();
    
    this.updateAccordionState();
    
    this.shadowRoot.querySelector('.accordion-header').addEventListener('click', () => {
      this._open = !this._open;
      if (this._open) {
        this.setAttribute('open', '');
      } else {
        this.removeAttribute('open');
      }
      this.updateAccordionState();
    });
  }
  
  attributeChangedCallback(name, newValue) {
    if (name === 'open') {
      this._open = this.hasAttribute('open');
      if (this.shadowRoot) {
        this.updateAccordionState();
      }
    } else if (name === 'title' && this.shadowRoot) {
      this.shadowRoot.querySelector('.accordion-title').textContent = newValue || 'Acordeón';
    }
  }
  
  updateAccordionState() {
    const content = this.shadowRoot.querySelector('.accordion-content');
    const icon = this.shadowRoot.querySelector('.accordion-icon');
    
    if (this._open) {
      content.style.maxHeight = '500px';
      content.style.padding = '15px 20px';
      icon.classList.add('open');
    } else {
      content.style.maxHeight = '0';
      content.style.padding = '0';
      icon.classList.remove('open');
    }
  }
  
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ${getAccordionStyles(this.styleConfig)}
      </style>
      
      <div class="accordion">
        <div class="accordion-header">
          <h3 class="accordion-title">${this.getAttribute('title') || 'Título'}</h3>
          <div class="accordion-icon"></div>
        </div>
        <div class="accordion-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('native-accordion', NativeAccordion);
