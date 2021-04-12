import { divideBy } from '../../src/math/divideBy.js'

it('divideBy()', () => {
  expect(divideBy(2, 4)).toBe(2)
  expect(divideBy(4, 2)).toBe(0.5)
})
