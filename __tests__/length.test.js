import { length } from '../src/length'

it('returns the length of an array', () => {
  expect(length([])).toBe(0)
  expect(length([1])).toBe(1)
  expect(length([1, 2])).toBe(2)
  expect(length([1, 2, 3])).toBe(3)
})
