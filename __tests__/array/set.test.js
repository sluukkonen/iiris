import { set } from '../../src/array/set.js'

it('sets the nth element of an array', () => {
  const arr = [1, 2, 3]

  expect(set(-3, 999, arr)).toEqual([999, 2, 3])
  expect(set(-2, 999, arr)).toEqual([1, 999, 3])
  expect(set(-1, 999, arr)).toEqual([1, 2, 999])
  expect(set(0, 999, arr)).toEqual([999, 2, 3])
  expect(set(1, 999, arr)).toEqual([1, 999, 3])
  expect(set(2, 999, arr)).toEqual([1, 2, 999])
})

it('returns the original array if index is out of bounds', () => {
  const arr = [1, 2, 3]

  expect(set(-4, 999, arr)).toBe(arr)
  expect(set(3, 999, arr)).toBe(arr)
})

it('writes undefined if the new value is undefined', () => {
  const arr = [1, 2, 3]

  expect(set(0, undefined, arr)).toEqual([undefined, 2, 3])
})

it('throws an error if the target is not an array', () => {
  expect(() => set(0, 1, null)).toThrowError(TypeError)
  expect(() => set(0, 1, undefined)).toThrowError(TypeError)
})
