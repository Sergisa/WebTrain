import Calendar from "../components/calendar.jsx";
import CalendarDay from "../components/calendar-day.jsx";
import {createSignal, For} from "solid-js";

function Timetable() {
    return (
        <>
            <Calendar days="31"></Calendar>
        </>
    )
}

export default Timetable
