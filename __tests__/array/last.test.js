import { last } from '../../src/array/last.js'

it('returns the last element of an array', () => {
  expect(last([])).toBeUndefined()
  expect(last([1])).toBe(1)
  expect(last([1, 2])).toBe(2)
  expect(last([1, 2, 3])).toBe(3)
})
