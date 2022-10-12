module.exports = {
    comments: false,
    minified: true,
    compact: true,
    presets: [
        [
            '@babel/env',
            {
                loose: true,
                modules: false,
            }
        ],
    ]
};