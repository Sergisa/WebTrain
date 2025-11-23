import {LitElement, css, html} from 'lit'
import litLogo from '../assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class DayWrapper extends LitElement {

    constructor() {
        super()
        //this.shiftIndex = 1

    }

    render() {
        //this.style.gridColumnStart = `${this.parentElement.shiftIndex}`;
        return html`<slot></slot>`
    }

    static get styles() {
        return css`
            :host {
                --main-color-rgb: var(--secondary-color-rgb);
                --main-color-hex: var(--secondary-color-hex);
                border: 1px solid var(--main-color-hex);
                display: block;
                padding: .4rem .2rem;
                border-radius: 5px;
                background-color: rgba(var(--main-color-rgb), 0.03);
            }`
    }
}

window.customElements.define('day-wrapper', DayWrapper)
