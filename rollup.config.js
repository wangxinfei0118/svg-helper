import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
export default {
    input: './index.js',
    output: {
        exports: 'auto',
        file: './dist/index.js',
        format: 'esm',
        name: 'svg-helper',
    },
    plugins: [
        commonjs(),
        nodeResolve({
            preferBuiltins: true,
        }),
        terser(),
        babel({ babelHelpers: 'bundled' })
    ],
}
