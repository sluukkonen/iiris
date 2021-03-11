import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'

const minify = process.env.MINIFY != null
const plugins = !minify
  ? []
  : [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true,
      }),
      terser({
        compress: { passes: 2, module: true, unsafe: true },
      }),
    ]
const output = !minify
  ? [
      {
        file: './dist/index.js',
        format: 'cjs',
      },
      {
        file: './dist/index.mjs',
        format: 'es',
      },
    ]
  : [{ file: './dist/index.min.mjs' }]

export default {
  input: './src/index.js',
  output,
  plugins,
}
