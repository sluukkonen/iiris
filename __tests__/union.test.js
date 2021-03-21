import { union } from '../src/union'

it('calculates the set union of two arrays', () => {
  expect(union([], [])).toEqual([])
  expect(union([1], [])).toEqual([1])
  expect(union([], [1])).toEqual([1])
  expect(union([1], [1])).toEqual([1])
  expect(union([1, 2], [1])).toEqual([1, 2])
  expect(union([1], [1, 2])).toEqual([1, 2])
  expect(union([1, 2], [1, 2])).toEqual([1, 2])
})

it('calculates the correct result when the first array is empty', () => {
  expect(union([], [1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3])
})
