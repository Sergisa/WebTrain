import {LitElement, css, html} from 'lit'
import {DayWrapper} from "./day-wrapper.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class DayCalendar extends LitElement {
    static get properties() {
        return {
            shiftIndex: {
                type: Number
            }
        }
    }

    constructor() {
        super();
        this.shiftIndex = 1;
        //style="grid-column-start: ${this.shiftIndex}"
    }

    setDays(daysCount) {
        for (let i = 0; i < daysCount; i++) {
            let day = document.createElement('day-wrapper')
            day.innerHTML = "DayTag"
            this.appendChild(day);
        }
    }

    render() {
        return html`
            <slot></slot>`
    }

    shift(count) {
        let firstDay = this.firstChild
        let firstDayStyle = firstDay.style;
        if (firstDayStyle.gridColumnStart === '') {
            firstDayStyle.gridColumnStart = '1'
        }
        if (firstDayStyle.gridColumnStart === '7' && count > 0) return;
        firstDayStyle.gridColumnStart = parseInt(firstDayStyle.gridColumnStart) + count
    }

    static get styles() {
        return css`
            :host {
                display: grid;
                grid-template-columns: repeat(7, 150px);
                grid-template-rows: repeat(5, 150px);
                gap: 5px 10px;
            }

            ::slotted(day-wrapper) {
            }`
    }
}

window.customElements.define('calendar-element', DayCalendar)
