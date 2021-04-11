import { some } from './some.js'

it('returns true if some of the values in the array match the predicate', () => {
  const is1 = (x) => x === 1

  expect(some(is1, [])).toBe(false)
  expect(some(is1, [1])).toBe(true)
  expect(some(is1, [2, 2])).toBe(false)
  expect(some(is1, [2, 2, 1])).toBe(true)
})
