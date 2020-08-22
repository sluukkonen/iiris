import { inc, minimumBy } from '../src'

it('returns the minimum value from an array with respect to a function', () => {
  expect(minimumBy(inc, [1, 2, 3])).toBe(2)
  expect(minimumBy(inc, [2, 1, 3])).toBe(2)
  expect(minimumBy(inc, [2, 3, 1])).toBe(2)
})

it('returns undefined for an empty array', () => {
  expect(minimumBy(inc, [])).toBeUndefined()
})
