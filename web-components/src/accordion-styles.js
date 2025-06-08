export const getAccordionStyles = (options = {}) => {

  const defaults = {
    backgroundColor: '#fff',
    headerBackground: '#f5f5f5',
    headerHoverBackground: '#e9e9e9',
    titleColor: '#333',
    iconColor: '#666'
  };

  const config = { ...defaults, ...options };

  return `
    :host {
      display: block;
      margin-bottom: 10px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      background-color: ${config.backgroundColor};
      width: 100%;
    }
    
    .accordion-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
      background-color: ${config.headerBackground};
      cursor: pointer;
      user-select: none;
      transition: background-color 0.3s ease;
    }
    
    .accordion-header:hover {
      background-color: ${config.headerHoverBackground};
    }
    
    .accordion-title {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 500;
      color: ${config.titleColor};
    }
    
    .accordion-icon {
      width: 24px;
      height: 24px;
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .accordion-icon::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-right: 2px solid ${config.iconColor};
      border-bottom: 2px solid ${config.iconColor};
      transform: rotate(45deg);
      transition: transform 0.3s ease;
    }
    
    .accordion-content {
      padding: 0;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
    }
    
    .accordion-icon.open::before,
    :host([open]) .accordion-icon::before {
      transform: rotate(-135deg);
    }
    
    :host([open]) .accordion-content {
      padding: 15px 20px;
      max-height: 500px;
    }
    
    /* Estilos responsivos para dispositivos móviles */
    @media (max-width: 768px) {
      .accordion-header {
        padding: 12px 15px;
      }
      
      .accordion-title {
        font-size: 1rem;
      }
      
      :host([open]) .accordion-content {
        padding: 12px 15px;
      }
    }
  `;
};
