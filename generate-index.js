#!/usr/bin/env node

/* eslint-disable import/no-commonjs */

const { promises: fs } = require('fs')
const path = require('path')
const { promisify } = require('util')
const glob = promisify(require('glob').glob)

async function generateIndex(directory) {
  const fullPath = path.join(__dirname, 'src', directory)
  const files = await glob(path.join(fullPath, '*.js'))
  const index = files
    .filter((file) => !file.endsWith('index.js') && !file.endsWith('.test.js'))
    .map((file) => `export * from './${path.relative(fullPath, file)}'`)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join('\n')
  return fs.writeFile(path.join(fullPath, 'index.js'), index + '\n')
}

Promise.all([
  generateIndex('array'),
  generateIndex('array/internal'),
  generateIndex('core'),
  generateIndex('core/internal'),
  generateIndex('function'),
  generateIndex('math'),
  generateIndex('math/internal'),
  generateIndex('object'),
  generateIndex('object/internal'),
  generateIndex('set'),
  generateIndex('set/internal'),
  generateIndex('string'),
  generateIndex('string/internal'),
]).catch(console.error)
