export const getSubscriptionStyles = (options = {}) => {

  const defaults = {
    backgroundColor: '#fff',
    softColor: '#ffe6dd',
    mainColor: '#ff3e00'
  };

  const config = { ...defaults, ...options };

  return `
    :host {
      font-family: Arial, sans-serif;
      display: inline-block;
      width: 90%;
      max-width: 300px;
      box-sizing: border-box;
      transition: border-color 0.3s;
    }

    .card {
      border: 1px solid ${config.softColor};
      border-radius: 12px;
      padding: 24px;
      background: ${config.backgroundColor};
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      transition: box-shadow 0.3s, transform 0.3s;
      
    }

    .card:hover {
      border-color: ${config.mainColor};
      background: linear-gradient(to bottom, ${config.backgroundColor}, ${config.softColor});
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
      transform: translateY(-4px);
    }

    .title {
      font-weight: bold;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${config.mainColor};
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
      border: 1px solid ${config.mainColor};
      border-radius: 6px;
      background: ${config.backgroundColor};
      font-weight: bold;
      cursor: pointer;
      margin-bottom: 20px;
      text-align: center;

      transition: background 0.3s, color 0.3s, transform 0.2s;
    }

    .button:hover {
        transform: scale(1.05);
    }

    .card:hover .button {
      background: ${config.mainColor};
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
    
    @media (max-width: 400px) {
    .card {
        padding: 16px;
    }
    .title {
        font-size: 1.1rem;
    }
    .price {
        font-size: 1.5rem;
    }
    .description,
    .features li {
        font-size: 0.9rem;
    }
    .button {
        padding: 8px 14px;
        font-size: 0.9rem;
    }
    }
  `;
};
