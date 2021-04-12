import { filter } from '../../src/array/filter.js'

it('returns the elements of an array that match a predicate', () => {
  const isEven = (x) => x % 2 === 0

  expect(filter(isEven, [])).toEqual([])
  expect(filter(isEven, [1])).toEqual([])
  expect(filter(isEven, [1, 2])).toEqual([2])
  expect(filter(isEven, [1, 2, 3])).toEqual([2])
})
