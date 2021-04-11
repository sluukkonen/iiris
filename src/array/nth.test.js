import { nth } from './nth.js'

it('retrieves the nth element from an array', () => {
  const arr = [1, 2, 3]

  expect(nth(-4, arr)).toBe(undefined)
  expect(nth(-3, arr)).toBe(1)
  expect(nth(-2, arr)).toBe(2)
  expect(nth(-1, arr)).toBe(3)
  expect(nth(0, arr)).toBe(1)
  expect(nth(1, arr)).toBe(2)
  expect(nth(2, arr)).toBe(3)
  expect(nth(3, arr)).toBe(undefined)

  expect(nth(-4)(arr)).toBe(undefined)
  expect(nth(-3)(arr)).toBe(1)
  expect(nth(-2)(arr)).toBe(2)
  expect(nth(-1)(arr)).toBe(3)
  expect(nth(0)(arr)).toBe(1)
  expect(nth(1)(arr)).toBe(2)
  expect(nth(2)(arr)).toBe(3)
  expect(nth(3)(arr)).toBe(undefined)
})

it('throws an error if array is nil', () => {
  expect(() => nth(0, null)).toThrowError(
    new TypeError(`Cannot read property 'length' of null`)
  )
})
