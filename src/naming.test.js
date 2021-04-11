/* eslint-disable import/no-commonjs */

const A = require('./array')
const I = require('./core')
const F = require('./function')
const M = require('./math')
const O = require('./object')
const S = require('./string')

it('each function has a proper name', () => {
  for (const module of [A, I, F, M, O, S])
    for (const [name, fn] of Object.entries(module)) {
      expect(fn.name).toEqual(name)
    }
})
