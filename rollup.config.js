'use strict'
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
const plugins = [
    babel( {
        exclude: 'node_modules/**',
        externalHelpersWhitelist: [
            'defineProperties',
            'createClass',
            'inheritsLoose',
            'defineProperty',
            'objectSpread2',
            'objectWithoutPropertiesLoose'
        ]
    } ),
    resolve()
];
export default [
    {
        context: 'this',
        input: 'src/js/index.js',
        output: [
            {
                file: 'dist/js/bundle.js',

                format: 'cjs',
                name:'Card'
                //plugins: [terser()]
            },
            {
                file: 'dist/js/bundle.min.js',

                format: 'umd',
                name:'Card',
                plugins: [terser()]
            }
        ],
        plugins
    }
];