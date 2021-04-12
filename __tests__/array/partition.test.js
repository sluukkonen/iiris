import { partition } from '../../src/array/partition.js'

it('splits an array into two groups based on a predicate', () => {
  const isEven = (n) => n % 2 === 0
  expect(partition(isEven, [])).toEqual([[], []])
  expect(partition(isEven, [1])).toEqual([[], [1]])
  expect(partition(isEven, [1, 2])).toEqual([[2], [1]])
  expect(partition(isEven, [1, 2, 3])).toEqual([[2], [1, 3]])
  expect(partition(isEven, [1, 2, 3, 4])).toEqual([
    [2, 4],
    [1, 3],
  ])
})
