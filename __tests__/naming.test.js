/* eslint-disable import/no-commonjs */

const A = require('../src/array')
const I = require('../src/core')
const F = require('../src/function')
const M = require('../src/math')
const O = require('../src/object')
const S = require('../src/string')

it('each function has a proper name', () => {
  for (const module of [A, I, F, M, O, S])
    for (const [name, fn] of Object.entries(module)) {
      expect(fn.name).toEqual(name)
    }
})
