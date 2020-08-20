import { dropWhile } from '../src'

it('takes elements matching a predicate from the begining of array', () => {
  const lessThan3 = (x) => x < 3

  expect(dropWhile(lessThan3, [])).toEqual([])
  expect(dropWhile(lessThan3, [1])).toEqual([])
  expect(dropWhile(lessThan3, [1, 2])).toEqual([])
  expect(dropWhile(lessThan3, [1, 2, 3])).toEqual([3])
})
