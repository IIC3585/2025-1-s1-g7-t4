import { LitElement, html, css } from 'https://unpkg.com/lit@2.8.0/index.js?module';

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

  static styles = css`
    :host {
      display: inline-block;
      font-family: Arial, sans-serif;
      width: 300px;
    }

    .card {
      border: 1px solid #ddd;
      border-radius: 12px;
      padding: 24px;
      background: #fff;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      transition: border-color 0.3s, box-shadow 0.3s;
    }

    .card:hover {
      border-color: black;
      box-shadow: 0 6px 14px rgba(0,0,0,0.1);
    }

    .title {
      font-weight: bold;
      font-size: 1.25rem;
      display: flex;
      align-items: center;  /* ← centra verticalmente */
      gap: 8px;             /* espacio entre título y badge */
    }

    .visits {
      margin: 8px 0;
      color: #444;
    }

    .price {
      font-size: 2rem;
      font-weight: bold;
      margin: 12px 0;
    }

    .subprice {
      color: #777;
      font-size: 0.9rem;
    }

    .description {
      margin: 16px 0;
      font-size: 0.95rem;
      color: #555;
    }

    .button {
      display: inline-block;
      padding: 10px 18px;
      border: 1px solid #000;
      border-radius: 6px;
      background: #fff;
      font-weight: bold;
      cursor: pointer;
      margin-bottom: 20px;
      text-align: center;
      transition: all 0.3s;
    }

    .card:hover .button {
      background: #000;
      color: #fff;
    }

    .features {
      list-style: none;
      padding: 0;
    }

    .features li {
      margin: 8px 0;
      display: flex;
      align-items: center;
      font-size: 0.95rem;
    }

    .features li::before {
      content: "✅";
      margin-right: 10px;
      color: green;
    }

    .new-badge {
      background: #3b82f6;
      color: white;
      font-size: 0.7rem;
      padding: 2px 6px;
      border-radius: 6px;
      margin-left: 8px;
    }

    .best-badge {
        background: #10b981; /* verde intenso */
        color: white;
        font-size: 0.7rem;
        padding: 2px 6px;
        border-radius: 6px;
        margin-left: 8px;
        text-transform: uppercase;
    }
  `;

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
        ${this.best ? html`<span class="best-badge">Recomendado</span>` : ''}
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
