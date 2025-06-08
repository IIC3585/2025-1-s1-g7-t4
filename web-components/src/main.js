import './style.css'
import litLogo from './lit.svg'
import webComponentsLogo from './webcomponents.svg'

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Web Components Demo</h1>
    <a href="/native-components" target="_blank">
      <img src="${webComponentsLogo}" class="logo" alt="Web Components logo" />
    </a>
    <a href="/lit-components" target="_blank">
      <img src="${litLogo}" class="logo lit" alt="Lit logo" />
    </a>
    <p class="read-the-docs">
      Haz clic en las imágenes para ver los componentes web nativos y desarrollados con Lit.
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
