module.exports = {
    comments: false,
    presets: [
        [
            '@babel/env',
            {
                loose: true,
                modules: false,
            }
        ],
    ],
    plugins: [
        '@babel/plugin-proposal-object-rest-spread'
    ]
};