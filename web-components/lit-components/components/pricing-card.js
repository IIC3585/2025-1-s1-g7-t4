import { LitElement, html, css, unsafeCSS } from 'https://unpkg.com/lit@2.8.0/index.js?module';
import { getSuscriptionStyles } from '../../src/suscription-styles.js';
export class PricingCard extends LitElement {
  static properties = {
    title: { type: String },
    visits: { type: String },
    price: { type: String },
    vat: { type: String },
    description: { type: String },
    features: { type: Array },
    best: { type: Boolean },
};

   static styles = css`${unsafeCSS(getSuscriptionStyles({
    backgroundColor: '#fff',
    softColor: '#e0e8ff',
    mainColor: '#324fff'
    }))}`;

  constructor() {
    super();
    this.title = 'Plan';
    this.visits = '';
    this.price = '';
    this.vat = '';
    this.description = '';
    this.features = [];
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('card-clicked', {
      detail: { title: this.title },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <div class="card">
        <div class="title">
        ${this.title}
        ${this.hasAttribute('best') ? html`<span class="best-badge">Recomendado</span>` : ''}
        </div>
        <div class="visits">${this.visits}</div>
        <div class="price">${this.price} <span class="subprice">/ mo</span></div>
        <div class="subprice">${this.vat}</div>
        <div class="description">${this.description}</div>
        <div class="button" @click="${this.handleClick}">Comenzar</div>
        <ul class="features">
          ${this.features.map(f => {
            const [text, badge] = f.split('|');
            return html`
              <li>
                ${text}
                ${badge === 'new' ? html`<span class="new-badge">Nuevo</span>` : ''}
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  }
}

customElements.define('pricing-card', PricingCard);
