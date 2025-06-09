import { getSubscriptionStyles } from '../../src/subscription-styles.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    ${getSubscriptionStyles({
    backgroundColor: '#fff',
    softColor: '#ffe6dd',
    mainColor: '#ff3e00'
    })}
  </style>

  <div class="card">
    <div class="title"></div>
    <div class="visits"></div>
    <div class="price"></div>
    <div class="subprice"></div>
    <div class="description"></div>
    <div class="button">Comenzar</div>
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
    return ['title', 'visits', 'price', 'vat', 'description', 'features', 'best'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const $ = (selector) => this.shadowRoot.querySelector(selector);
    if (!$('.title')) return;

    const titleText = this.getAttribute('title') || 'Plan';
    const isBest = this.hasAttribute('best');

    const titleContainer = $('.title');
    titleContainer.innerHTML = ''; // Limpiar

    const titleSpan = document.createElement('span');
    titleSpan.textContent = titleText;
    titleContainer.appendChild(titleSpan);

    if (isBest) {
    const badge = document.createElement('span');
    badge.className = 'best-badge';
    badge.textContent = 'Recomendado';
    titleContainer.appendChild(badge);
    }

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
            span.textContent = 'Nuevo';
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
