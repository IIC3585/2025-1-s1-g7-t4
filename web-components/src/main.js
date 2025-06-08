import './style.css'
import litLogo from './lit.svg'
import webComponentsLogo from './webcomponents.svg'

document.querySelector('#app').innerHTML = `
  <div class="main-container">
    <h1>Web Components Demo</h1>
    <div class="logo-container">
      <a href="./native-components/" class="logo-link">
        <img src="${webComponentsLogo}" class="logo" alt="Web Components logo" />
        <span class="logo-label">Web Components Nativos</span>
      </a>
      <a href="./lit-components/" class="logo-link">
        <img src="${litLogo}" class="logo lit" alt="Lit logo" />
        <span class="logo-label">Lit Components</span>
      </a>
    </div>
    <p class="read-the-docs">
      Haz clic en las imágenes para ver los componentes web nativos y desarrollados con Lit.
    </p>
  </div>
`
