import { difference } from '../src/difference'

it('calculates the set difference of two arrays', () => {
  expect(difference([], [])).toEqual([])
  expect(difference([1], [])).toEqual([1])
  expect(difference([], [1])).toEqual([])
  expect(difference([1], [1])).toEqual([])
  expect(difference([1, 2], [1])).toEqual([2])
  expect(difference([1], [1, 2])).toEqual([])
  expect(difference([1], [1, 2])).toEqual([])
  expect(difference([1, 2], [1, 2])).toEqual([])
})
