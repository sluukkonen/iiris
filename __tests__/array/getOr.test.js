import { getOr } from '../../src/array/getOr.js'

it('retrieves the nth element or the default value from an array', () => {
  const arr = [1, 2, 3]

  expect(getOr(0, -4, arr)).toBe(0)
  expect(getOr(0, -3, arr)).toBe(1)
  expect(getOr(0, -2, arr)).toBe(2)
  expect(getOr(0, -1, arr)).toBe(3)
  expect(getOr(0, 0, arr)).toBe(1)
  expect(getOr(0, 1, arr)).toBe(2)
  expect(getOr(0, 2, arr)).toBe(3)
  expect(getOr(0, 3, arr)).toBe(0)

  expect(getOr(0, -4)(arr)).toBe(0)
  expect(getOr(0, -3)(arr)).toBe(1)
  expect(getOr(0, -2)(arr)).toBe(2)
  expect(getOr(0, -1)(arr)).toBe(3)
  expect(getOr(0, 0)(arr)).toBe(1)
  expect(getOr(0, 1)(arr)).toBe(2)
  expect(getOr(0, 2)(arr)).toBe(3)
  expect(getOr(0, 3)(arr)).toBe(0)
})

it('returns undefined if the element is undefined', () => {
  expect(getOr(0, 0, [undefined])).toBe(undefined)
})

it('throws an error if the element is nil', () => {
  expect(() => getOr(0, 0, null)).toThrowError(
    new TypeError("Cannot read properties of null (reading 'length')")
  )
})
