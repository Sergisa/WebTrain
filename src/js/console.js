const Logger = {
    colors: {
        blue: 'font-weight:bolder; color:#2196F3',
        red: 'font-weight:bolder; color:#F44336',
        green: 'font-weight:bolder; color:#4CAF50'
    },
    print: function (color, text) {
        console.log(`%c ${text}`, this.colors[color])
    }
};