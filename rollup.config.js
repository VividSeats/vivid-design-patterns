const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-terser').terser;
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');

const nodeEnv = JSON.stringify(process.env.NODE_ENV || 'production');
const isDev = nodeEnv === 'dev';
const packageJson = require('./package.json');
const external = Object.keys(packageJson.peerDependencies);

module.exports = {
    external,
    plugins: [
        resolve({
            browser: true,
            preferBuiltins: true,
            extensions: ['.js', '.jsx']
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': nodeEnv
        }),
        commonjs({
            extensions: ['.js', '.jsx']
        }),
        !isDev && uglify()
    ],
    isCache: isDev
};
