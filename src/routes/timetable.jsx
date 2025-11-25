import Calendar from "../components/calendar/calendar.jsx";
import CalendarDay from "../components/calendar/calendar-day.jsx";
import {createSignal, For} from "solid-js";

function Timetable() {
    return (
        <>
            <h1>Расписание</h1>
            <Calendar days="31"></Calendar>
        </>
    )
}

export default Timetable
