import { get } from '../../src/array/get.js'

it('retrieves the nth element from an array', () => {
  const arr = [1, 2, 3]

  expect(get(-4, arr)).toBe(undefined)
  expect(get(-3, arr)).toBe(1)
  expect(get(-2, arr)).toBe(2)
  expect(get(-1, arr)).toBe(3)
  expect(get(0, arr)).toBe(1)
  expect(get(1, arr)).toBe(2)
  expect(get(2, arr)).toBe(3)
  expect(get(3, arr)).toBe(undefined)

  expect(get(-4)(arr)).toBe(undefined)
  expect(get(-3)(arr)).toBe(1)
  expect(get(-2)(arr)).toBe(2)
  expect(get(-1)(arr)).toBe(3)
  expect(get(0)(arr)).toBe(1)
  expect(get(1)(arr)).toBe(2)
  expect(get(2)(arr)).toBe(3)
  expect(get(3)(arr)).toBe(undefined)
})

it('throws an error if array is nil', () => {
  expect(() => get(0, null)).toThrowError(
    new TypeError(`Cannot read property 'length' of null`)
  )
})
