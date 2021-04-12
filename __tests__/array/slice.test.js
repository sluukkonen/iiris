import { slice } from '../../src/array/slice.js'

it('extracts a slice from an array', () => {
  expect(slice(0, 0, [1, 2, 3])).toEqual([])
  expect(slice(0, 1, [1, 2, 3])).toEqual([1])
  expect(slice(0, 2, [1, 2, 3])).toEqual([1, 2])
  expect(slice(0, 3, [1, 2, 3])).toEqual([1, 2, 3])
  expect(slice(1, 3, [1, 2, 3])).toEqual([2, 3])
  expect(slice(2, 3, [1, 2, 3])).toEqual([3])
  expect(slice(3, 3, [1, 2, 3])).toEqual([])
})

it('extracts elements from the end of the array if start is negative', () => {
  expect(slice(-1, 3, [1, 2, 3])).toEqual([3])
  expect(slice(-2, 3, [1, 2, 3])).toEqual([2, 3])
  expect(slice(-3, 3, [1, 2, 3])).toEqual([1, 2, 3])
  expect(slice(-3, 2, [1, 2, 3])).toEqual([1, 2])
  expect(slice(-3, 1, [1, 2, 3])).toEqual([1])
  expect(slice(-3, 0, [1, 2, 3])).toEqual([])
})

it('extracts elements from tyhe end of the array if end is negative', () => {
  expect(slice(0, -1, [1, 2, 3])).toEqual([1, 2])
  expect(slice(0, -2, [1, 2, 3])).toEqual([1])
  expect(slice(0, -3, [1, 2, 3])).toEqual([])
})
