/* @refresh reload */

import {render} from 'solid-js/web'
import './App.scss'
import {Route, Router} from "@solidjs/router";
import Timetable from "./routes/timetable.jsx";
import {enableThemeListener, getPreferredTheme} from "./themeController.js";
import IndexPage from "./routes/index.jsx";

const root = document.getElementById('root')
document.documentElement.dataset.theme = getPreferredTheme();
enableThemeListener();


render(() => (
    <Router>
        <Route path="/" component={IndexPage}/>
        <Route path="/about" component={() => <h1>Hello World!</h1>}/>
        <Route path="/calendar" component={Timetable}/>
    </Router>
), root)
