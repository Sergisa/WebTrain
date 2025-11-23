import { LitElement, css, html } from 'lit'
import litLogo from '../assets/lit.svg'
import viteLogo from '/vite.svg'
import calendarIcon from '../assets/CalendarIcon.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Headline extends LitElement {
    constructor() {
    super()
  }

  render() {
    return html`
        <a href="https://vite.dev" target="_blank">
            <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
            <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
            <img src=${calendarIcon} class="logo lit" alt="Lit logo" />
        </a>
    `
  }

  static get styles() {
    return css`
        .logo {
            height: 6em;
            padding: 1.5em;
            will-change: filter;
            transition: filter 300ms;
        }

        .logo:hover {
            filter: drop-shadow(0 0 2em #646cffaa);
        }

        .logo.lit:hover {
            filter: drop-shadow(0 0 2em #325cffaa);
        }

        a {
            display: inline-block;
        }

        @media (prefers-color-scheme: light) {
            a:hover {
                color: #747bff;
            }
        }
    `
  }
}

window.customElements.define('headline-element', Headline)
