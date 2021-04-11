import path from 'path'
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

const modules = [
  'core/internal',
  'core',
  'array/internal',
  'array',
  'function',
  'math/internal',
  'math',
  'object/internal',
  'object',
  'set',
  'set/internal',
  'string/internal',
  'string',
]

const mkConfig = (module) => ({
  input: `./src/${module}/index.js`,
  output: [
    {
      file: `./dist/${module}/index.js`,
      format: 'cjs',
    },
    {
      file: `./dist/${module}/index.mjs`,
      format: 'es',
    },
  ],
  external: modules.map((module) =>
    path.resolve(__dirname, 'src', module, 'index.js')
  ),
  plugins,
})

export default modules.map(mkConfig)
