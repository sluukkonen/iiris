import { findIndex } from '../src'

it('returns the index of the first element matching a predicate', () => {
  const is1 = (x) => x === 1

  expect(findIndex(is1, [])).toBe(-1)
  expect(findIndex(is1, [1])).toBe(0)
  expect(findIndex(is1, [0, 1, 1])).toBe(1)
  expect(findIndex(is1, [-1, 0, 1, 1])).toBe(2)
})
