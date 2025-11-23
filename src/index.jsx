/* @refresh reload */

import {render} from 'solid-js/web'
import './index.css'
import App from './App.jsx'
import {Route, Router} from "@solidjs/router";
//import Home from './routes/index.jsx'
import Calendar from './components/calendar.jsx'
import Timetable from "./routes/timetable.jsx";

const root = document.getElementById('root')

render(() => (
    <Router>
        <Route path="/" component={App}/>
        <Route path="/about" component={() => <h1>Hello World!</h1>}/>
        <Route path="/calendar" component={Timetable}/>
    </Router>
), root)
