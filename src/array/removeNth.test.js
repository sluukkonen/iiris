import { removeNth } from './removeNth.js'

it('removes the nth element from an array', () => {
  const arr = [1, 2, 3]

  expect(removeNth(-3, arr)).toEqual([2, 3])
  expect(removeNth(-2, arr)).toEqual([1, 3])
  expect(removeNth(-1, arr)).toEqual([1, 2])
  expect(removeNth(0, arr)).toEqual([2, 3])
  expect(removeNth(1, arr)).toEqual([1, 3])
  expect(removeNth(2, arr)).toEqual([1, 2])
})

it('returns the original array if index is out of bounds', () => {
  const arr = [1, 2, 3]

  expect(removeNth(-4, arr)).toBe(arr)
  expect(removeNth(3, arr)).toBe(arr)
})
