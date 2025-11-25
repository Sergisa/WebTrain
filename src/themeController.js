function getPreferredTheme() {
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme')
    }
    return matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
}

function enableThemeListener() {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        document.documentElement.dataset.theme = getPreferredTheme();
    });
}

export {getPreferredTheme, enableThemeListener}