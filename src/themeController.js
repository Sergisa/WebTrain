function getInvertedPreferredTheme() {
    return (getPreferredTheme() === "dark") ? "light" : "dark"
}

function getPreferredTheme() {
    const matcher = matchMedia('(prefers-color-scheme: dark)');
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme')
    }
    return matcher.matches ? "dark" : "light";
}

function updateThemeTag() {
    document.documentElement.dataset.theme = getPreferredTheme();
}

export {getPreferredTheme, updateThemeTag, getInvertedPreferredTheme}