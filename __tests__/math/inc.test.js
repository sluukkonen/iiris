import { inc } from '../../src/math/inc.js'

it('increments a number', () => {
  expect(inc(0)).toBe(1)
  expect(inc(1)).toBe(2)
  expect(inc(2)).toBe(3)
})
