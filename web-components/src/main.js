import './style.css'
import litLogo from './lit.svg'
import webComponentsLogo from './webcomponents.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="/native-components" target="_blank">
    <h1>Demo Web Components</h1>
    <img src="${webComponentsLogo}" class="logo" alt="Web Components logo" />
    </a>
    <a href="/lit-components" target="_blank">
    <img src="${litLogo}" class="logo lit" alt="Lit logo" />
    </a>
    <p class="read-the-docs">
      Clickea una imagen para ver los componentes web nativos y desarrollados con Lit.
    </p>
  </div>
`
