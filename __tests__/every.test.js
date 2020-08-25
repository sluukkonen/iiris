import { every } from '../src/every'

it('returns true if every value in the array matches the predicate', () => {
  const is1 = (x) => x === 1

  expect(every(is1, [])).toBe(true)
  expect(every(is1, [1])).toBe(true)
  expect(every(is1, [1, 1])).toBe(true)
  expect(every(is1, [1, 1, 1])).toBe(true)
  expect(every(is1, [1, 1, 1, 2])).toBe(false)
})
