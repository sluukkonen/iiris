import { remove } from '../../src/array/remove.js'

it('removes the nth element from an array', () => {
  const arr = [1, 2, 3]

  expect(remove(-3, arr)).toEqual([2, 3])
  expect(remove(-2, arr)).toEqual([1, 3])
  expect(remove(-1, arr)).toEqual([1, 2])
  expect(remove(0, arr)).toEqual([2, 3])
  expect(remove(1, arr)).toEqual([1, 3])
  expect(remove(2, arr)).toEqual([1, 2])
})

it('returns the original array if index is out of bounds', () => {
  const arr = [1, 2, 3]

  expect(remove(-4, arr)).toBe(arr)
  expect(remove(3, arr)).toBe(arr)
})
