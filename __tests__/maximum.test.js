import { maximum } from '../src'

it('returns the maximum value from an array', () => {
  expect(maximum([1, 2, 3])).toBe(3)
  expect(maximum([2, 1, 3])).toBe(3)
  expect(maximum([2, 3, 1])).toBe(3)
})

it('returns undefined for an empty array', () => {
  expect(maximum([])).toBeUndefined()
})
