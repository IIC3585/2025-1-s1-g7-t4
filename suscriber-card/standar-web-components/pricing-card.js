const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      font-family: Arial, sans-serif;
      display: inline-block;
      width: 300px;
      transition: border-color 0.3s;
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
  </style>

  <div class="card">
    <div class="title"></div>
    <div class="visits"></div>
    <div class="price"></div>
    <div class="subprice"></div>
    <div class="description"></div>
    <div class="button">Get started</div>
    <ul class="features"></ul>
  </div>
`;

class PricingCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('.button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('card-clicked', {
        detail: { title: this.getAttribute('title') || 'Untitled' },
        bubbles: true,
        composed: true
      }));
    });
  }

  static get observedAttributes() {
    return ['title', 'visits', 'price', 'vat', 'description', 'features'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const $ = (selector) => this.shadowRoot.querySelector(selector);
    if (!$('.title')) return;

    $('.title').textContent = this.getAttribute('title') || 'Plan';
    $('.visits').textContent = this.getAttribute('visits') || '';
    $('.price').innerHTML = `${this.getAttribute('price') || ''} <span class="subprice">/ mo</span>`;
    $('.subprice').textContent = this.getAttribute('vat') || '';
    $('.description').textContent = this.getAttribute('description') || '';

    const featuresList = $('.features');
    featuresList.innerHTML = '';

    const rawFeatures = this.getAttribute('features');
    if (rawFeatures) {
      try {
        const features = JSON.parse(rawFeatures);
        features.forEach(f => {
          const [text, badge] = f.split('|');
          const li = document.createElement('li');
          li.textContent = text.trim();
          if (badge === 'new') {
            const span = document.createElement('span');
            span.className = 'new-badge';
            span.textContent = 'New';
            li.appendChild(span);
          }
          featuresList.appendChild(li);
        });
      } catch (e) {
        console.error('Invalid features JSON', e);
      }
    }
  }
}

customElements.define('pricing-card', PricingCard);
