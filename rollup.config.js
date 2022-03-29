import { babel } from '@rollup/plugin-babel'
import virtual from '@rollup/plugin-virtual'
import replace from '@rollup/plugin-replace'
import path from 'path'
import glob from 'glob'
import { terser } from 'rollup-plugin-terser'

// We create a number of virtual entry points that export all modules
// from the respective directories.
const entryPoints = [
  './src/index.js',
  './src/array.js',
  './src/map.js',
  './src/object.js',
  './src/set.js',
  './src/text.js',
].map((i) => path.resolve(__dirname, i))

const plugins = [
  // Create a virtual entry points for each subdirectory.
  virtual(
    entryPoints.reduce((obj, e) => {
      obj[e] = createEntryPoint(e)
      return obj
    }, {})
  ),
  babel({ babelHelpers: 'bundled' }),
]

function createEntryPoint(file) {
  const basename = path.basename(file, '.js')
  const directory = path.resolve(
    __dirname,
    'src',
    basename === 'index' ? '' : basename
  )
  return glob
    .sync(path.join(directory, '*.js'))
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .map((f) => `export { ${path.basename(f, '.js')} } from '${f}'`)
    .join('\n')
}

if (process.env.MINIFY != null) {
  plugins.push(
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    terser({
      compress: { passes: 2, module: true, unsafe: true },
    })
  )
}

export default {
  input: entryPoints,
  output: [
    {
      dir: './dist',
      chunkFileNames: 'shared.js',
      externalLiveBindings: false,
      entryFileNames: '[name].js',
      preferConst: true,
      format: 'cjs',
    },
    {
      dir: './dist',
      chunkFileNames: 'shared.mjs',
      entryFileNames: `[name].mjs`,
      format: 'es',
    },
  ],
  plugins,
}
