import { range } from './range.js'
import { sum } from './sum.js'

it('calculates the sum of a numeric array', () => {
  expect(sum(range(0, 100))).toEqual(4950)
  expect(sum(range(0, 1000))).toEqual(499500)
})

it('returns NaN if some of the values are missing', () => {
  expect(sum([1, undefined, 3])).toBe(NaN)
})

it('returns 0 for an empty array', () => {
  expect(sum([])).toBe(0)
})
