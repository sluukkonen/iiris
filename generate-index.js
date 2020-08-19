#!/usr/bin/env node

/* eslint-disable import/no-commonjs */

const { promisify } = require('util')
const path = require('path')
const glob = promisify(require('glob').glob)
const writeFile = promisify(require('fs').writeFile)

glob(path.join(__dirname, 'src/*.js')).then((files) => {
  const functions = files
    .map((f) => path.basename(f, '.js'))
    .filter((f) => f !== 'index')
  const index = functions
    .map((fn) => `export { ${fn} } from './${fn}'`)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join('\n')
  return writeFile(path.join(__dirname, 'src', 'index.js'), index + '\n')
})
