import styles from './calendar.module.css'
function CalendarDay(props) {

    return (
        <>
            <div class={styles.calendar__day}>
                {props.children}
            </div>
        </>
    )
}

export default CalendarDay
