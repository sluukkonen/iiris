import { maximumBy } from './maximumBy.js'

const square = (x) => x * x

it('returns the maximum value from an array with respect to a function', () => {
  expect(maximumBy(square, [1, 2, -3])).toBe(-3)
  expect(maximumBy(square, [2, 1, -3])).toBe(-3)
  expect(maximumBy(square, [2, -3, 1])).toBe(-3)
})

it('returns undefined for an empty array', () => {
  expect(maximumBy(square, [])).toBeUndefined()
})
