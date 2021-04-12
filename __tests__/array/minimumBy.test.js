import { minimumBy } from '../../src/array/minimumBy.js'

const square = (x) => x * x

it('returns the minimum value from an array with respect to a function', () => {
  expect(minimumBy(square, [-1, -2, -3])).toBe(-1)
  expect(minimumBy(square, [-2, -1, -3])).toBe(-1)
  expect(minimumBy(square, [-2, -3, -1])).toBe(-1)
})

it('returns undefined for an empty array', () => {
  expect(minimumBy(square, [])).toBeUndefined()
})
