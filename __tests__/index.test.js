/* eslint-disable import/no-commonjs */

const I = require('../src')

it('each function has a proper name', () => {
  Object.entries(I).forEach(([name, fn]) => expect(fn.name).toEqual(name))
})
