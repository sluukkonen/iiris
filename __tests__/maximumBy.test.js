import { maximumBy, dec } from '../src'

it('returns the maximum value from an array with respect to a function', () => {
  expect(maximumBy(dec, [1, 2, 3])).toBe(2)
  expect(maximumBy(dec, [2, 1, 3])).toBe(2)
  expect(maximumBy(dec, [2, 3, 1])).toBe(2)
})

it('returns undefined for an empty array', () => {
  expect(maximumBy(dec, [])).toBeUndefined()
})
