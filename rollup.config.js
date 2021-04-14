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
  './src/function.js',
  './src/math.js',
  './src/object.js',
  './src/set.js',
  './src/string.js',
].map((i) => path.resolve(__dirname, i))

const plugins = [
  // Create a virtual entry points for each subdirectory.
  virtual(Object.fromEntries(entryPoints.map((e) => [e, createEntryPoint(e)]))),
]

function createEntryPoint(file) {
  const basename = path.basename(file, '.js')
  const directory =
    basename === 'index'
      ? path.resolve(__dirname, 'src', 'core') // TODO: Move these the root of `src`.
      : path.resolve(__dirname, 'src', basename)
  return glob
    .sync(path.join(directory, '*.js'))
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
