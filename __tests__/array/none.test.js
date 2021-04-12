import { none } from '../../src/array/none.js'

it('returns true if none of the values in the array match the predicate', () => {
  const is1 = (x) => x === 1

  expect(none(is1, [])).toBe(true)
  expect(none(is1, [0])).toBe(true)
  expect(none(is1, [0, 0])).toBe(true)
  expect(none(is1, [0, 0, 0])).toBe(true)
  expect(none(is1, [0, 0, 0, 1])).toBe(false)
})
