import CalendarDay from "./calendar-day.jsx";
import {createSignal, For} from "solid-js";
import styles from './calendar.module.css'

function Calendar(props) {
    let itemsArray = [];
    for (let i = 1; i < props.days; i++) {
        itemsArray.push(i)
    }
    const [items, setItems] = createSignal(itemsArray)

    return (
        <div class={styles.calendar}>
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
