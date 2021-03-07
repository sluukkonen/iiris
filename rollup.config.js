import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
    },
    {
      file: './dist/index.mjs',
      format: 'es',
    },
    {
      file: './dist/index.min.mjs',
      format: 'es',
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        terser({
          compress: { passes: 2, module: true, unsafe: true },
        }),
      ],
    },
  ],
}
