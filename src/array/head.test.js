import { head } from './head.js'

it('returns the first element of an array', () => {
  expect(head([])).toBeUndefined()
  expect(head([1])).toBe(1)
  expect(head([1, 2])).toBe(1)
  expect(head([1, 2, 3])).toBe(1)
})
