import { findLastIndex } from '../src'

it('returns the index of the first element matching a predicate', () => {
  const is1 = (x) => x === 1

  expect(findLastIndex(is1, [])).toBe(-1)
  expect(findLastIndex(is1, [1])).toBe(0)
  expect(findLastIndex(is1, [1, 2])).toBe(0)
  expect(findLastIndex(is1, [2, 1, 1])).toBe(2)
  expect(findLastIndex(is1, [1, 1, 2])).toBe(1)
})
