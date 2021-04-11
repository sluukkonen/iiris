import { count } from './count.js'

it('counts the number of elements in an array that satisfy a predicate', () => {
  const isEven = (n) => n % 2 === 0

  expect(count(isEven, [])).toBe(0)
  expect(count(isEven, [1])).toBe(0)
  expect(count(isEven, [1, 2])).toBe(1)
  expect(count(isEven, [1, 2, 3])).toBe(1)
})
