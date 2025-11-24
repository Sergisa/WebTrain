/* @refresh reload */

import {render} from 'solid-js/web'
import './index.css'
import App from './App.jsx'
import {Route, Router} from "@solidjs/router";
import Timetable from "./routes/timetable.jsx";

const root = document.getElementById('root')
if (matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.dataset.theme = 'dark';
} else {
    document.documentElement.dataset.theme = 'light';
}
render(() => (
    <Router>
        <Route path="/" component={App}/>
        <Route path="/about" component={() => <h1>Hello World!</h1>}/>
        <Route path="/calendar" component={Timetable}/>
    </Router>
), root)
