/* @refresh reload */

import {render} from 'solid-js/web'
import './App.scss'
import {Route, Router} from "@solidjs/router";
import Timetable from "./routes/timetable.jsx";
import {getInvertedPreferredTheme, getPreferredTheme, updateThemeTag} from "./themeController.js";
import IndexPage from "./routes/index.jsx";

const root = document.getElementById('root')

updateThemeTag()
document.getElementById('theme-toggle').addEventListener('click', function () {
    localStorage.setItem('theme', getInvertedPreferredTheme());
    updateThemeTag();
})
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!localStorage.getItem('theme')) {
        updateThemeTag();
    }
});

render(() => (
    <Router>
        <Route path="/" component={IndexPage}/>
        <Route path="/about" component={() => <h1>Hello World!</h1>}/>
        <Route path="/calendar" component={Timetable}/>
    </Router>
), root)
