import html from './app-main.html?raw'
import css from './app-main.css?raw'


export default class AppMain extends HTMLElement {


  ConnectedCallback: boolean = false

  
  constructor() {
    super()
  }

  
  connectedCallback() {

    // only handle once
    if (this.ConnectedCallback) return
    this.ConnectedCallback = true

    const template = document.createElement('template')
    template.innerHTML = `<style>${css}</style>${html}`

    // create shadowroot, append template
    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(template.content.cloneNode(true))

  }

}
