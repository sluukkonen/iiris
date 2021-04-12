import { takeWhile } from '../../src/array/takeWhile.js'

it('takes elements matching a predicate from the begining of array', () => {
  const lessThan3 = (x) => x < 3

  expect(takeWhile(lessThan3, [])).toEqual([])
  expect(takeWhile(lessThan3, [1])).toEqual([1])
  expect(takeWhile(lessThan3, [1, 2])).toEqual([1, 2])
  expect(takeWhile(lessThan3, [1, 2, 3])).toEqual([1, 2])
})
