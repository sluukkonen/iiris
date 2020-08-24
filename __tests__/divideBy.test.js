import { divideBy } from '../src'

it('divideBy()', () => {
  expect(divideBy(2, 4)).toBe(2)
  expect(divideBy(4, 2)).toBe(0.5)
})
