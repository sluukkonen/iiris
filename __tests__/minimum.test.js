import { minimum } from '../src'

it('returns the minimum value from an array', () => {
  expect(minimum([1, 2, 3])).toBe(1)
  expect(minimum([2, 1, 3])).toBe(1)
  expect(minimum([2, 3, 1])).toBe(1)
})

it('returns undefined for an empty array', () => {
  expect(minimum([])).toBeUndefined()
})
