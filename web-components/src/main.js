import './style.css'
import litLogo from './lit.svg'
import webComponentsLogo from './webcomponents.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="/native-components" target="_blank">
      <img src="${webComponentsLogo}" class="logo" alt="Web Components logo" />
    </a>
    <a href="/lit-components" target="_blank">
      <img src="${litLogo}" class="logo lit" alt="Lit logo" />
    </a>
    <h1>Web Components Demo</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Web Components logo to see native components or Lit logo to see Lit components
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
