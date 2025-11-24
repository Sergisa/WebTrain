import CalendarDay from "./calendar-day.jsx";
import {createSignal, For} from "solid-js";
import './calendar.css'

function Calendar(props) {
    let itemsArray = [];
    for (let i = 1; i < props.days; i++) {
        itemsArray.push(i)
    }
    const [items, setItems] = createSignal(itemsArray)

    return (
        <div class="calendar">
            <For each={items()}>
                {(item, index) => (
                    <CalendarDay>{item}</CalendarDay>
                )}
            </For>
            {props.children}
        </div>
    )
}

export default Calendar
