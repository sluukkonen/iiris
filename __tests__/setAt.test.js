import { setAt } from '../src/setAt'

it('sets the element at an index to the specified value', () => {
  const arr = [1, 2, 3]

  expect(setAt(-3, 999, arr)).toEqual([999, 2, 3])
  expect(setAt(-2, 999, arr)).toEqual([1, 999, 3])
  expect(setAt(-1, 999, arr)).toEqual([1, 2, 999])
  expect(setAt(0, 999, arr)).toEqual([999, 2, 3])
  expect(setAt(1, 999, arr)).toEqual([1, 999, 3])
  expect(setAt(2, 999, arr)).toEqual([1, 2, 999])
})

it('removes the element if the new value is undefined', () => {
  const arr = [1, 2, 3]

  expect(setAt(-3, undefined, arr)).toEqual([2, 3])
  expect(setAt(-2, undefined, arr)).toEqual([1, 3])
  expect(setAt(-1, undefined, arr)).toEqual([1, 2])
  expect(setAt(0, undefined, arr)).toEqual([2, 3])
  expect(setAt(1, undefined, arr)).toEqual([1, 3])
  expect(setAt(2, undefined, arr)).toEqual([1, 2])
})

it('returns the original array if index is out of bounds', () => {
  const arr = [1, 2, 3]

  expect(setAt(-4, 999, arr)).toBe(arr)
  expect(setAt(-4, undefined, arr)).toBe(arr)

  expect(setAt(3, undefined, arr)).toBe(arr)
  expect(setAt(3, 999, arr)).toBe(arr)
})

it('throws an error if the target is not an array', () => {
  expect(() => setAt(0, 1, null)).toThrowError(TypeError)
  expect(() => setAt(0, 1, undefined)).toThrowError(TypeError)
})
