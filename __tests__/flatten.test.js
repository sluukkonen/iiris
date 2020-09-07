import { flatten } from '../src/flatten'

it('flattens an array up to the maximum depth', () => {
  expect(flatten(0, [])).toEqual([])
  expect(flatten(1, [])).toEqual([])
  expect(flatten(2, [])).toEqual([])

  expect(flatten(0, [1])).toEqual([1])
  expect(flatten(1, [1])).toEqual([1])
  expect(flatten(2, [1])).toEqual([1])

  expect(flatten(0, [1, [2]])).toEqual([1, [2]])
  expect(flatten(1, [1, [2]])).toEqual([1, 2])
  expect(flatten(2, [1, [2]])).toEqual([1, 2])

  expect(flatten(0, [1, [2, [3]]])).toEqual([1, [2, [3]]])
  expect(flatten(1, [1, [2, [3]]])).toEqual([1, 2, [3]])
  expect(flatten(2, [1, [2, [3]]])).toEqual([1, 2, 3])

  expect(flatten(0, [1, [2, [3]]])).toEqual([1, [2, [3]]])
  expect(flatten(1, [1, [2, [3]]])).toEqual([1, 2, [3]])
  expect(flatten(2, [1, [2, [3]]])).toEqual([1, 2, 3])
})
