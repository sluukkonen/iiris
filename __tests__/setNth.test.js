import { setNth } from '../src/setNth'

it('sets the nth element of an array', () => {
  const arr = [1, 2, 3]

  expect(setNth(-3, 999, arr)).toEqual([999, 2, 3])
  expect(setNth(-2, 999, arr)).toEqual([1, 999, 3])
  expect(setNth(-1, 999, arr)).toEqual([1, 2, 999])
  expect(setNth(0, 999, arr)).toEqual([999, 2, 3])
  expect(setNth(1, 999, arr)).toEqual([1, 999, 3])
  expect(setNth(2, 999, arr)).toEqual([1, 2, 999])
})

it('removes the element if the new value is undefined', () => {
  const arr = [1, 2, 3]

  expect(setNth(-3, undefined, arr)).toEqual([2, 3])
  expect(setNth(-2, undefined, arr)).toEqual([1, 3])
  expect(setNth(-1, undefined, arr)).toEqual([1, 2])
  expect(setNth(0, undefined, arr)).toEqual([2, 3])
  expect(setNth(1, undefined, arr)).toEqual([1, 3])
  expect(setNth(2, undefined, arr)).toEqual([1, 2])
})

it('returns the original array if index is out of bounds', () => {
  const arr = [1, 2, 3]

  expect(setNth(-4, 999, arr)).toBe(arr)
  expect(setNth(-4, undefined, arr)).toBe(arr)

  expect(setNth(3, undefined, arr)).toBe(arr)
  expect(setNth(3, 999, arr)).toBe(arr)
})

it('throws an error if the target is not an array', () => {
  expect(() => setNth(0, 1, null)).toThrowError(TypeError)
  expect(() => setNth(0, 1, undefined)).toThrowError(TypeError)
})
