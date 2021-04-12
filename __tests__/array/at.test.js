import { at } from '../../src/array/at.js'

it('retrieves the nth element from an array', () => {
  const arr = [1, 2, 3]

  expect(at(-4, arr)).toBe(undefined)
  expect(at(-3, arr)).toBe(1)
  expect(at(-2, arr)).toBe(2)
  expect(at(-1, arr)).toBe(3)
  expect(at(0, arr)).toBe(1)
  expect(at(1, arr)).toBe(2)
  expect(at(2, arr)).toBe(3)
  expect(at(3, arr)).toBe(undefined)

  expect(at(-4)(arr)).toBe(undefined)
  expect(at(-3)(arr)).toBe(1)
  expect(at(-2)(arr)).toBe(2)
  expect(at(-1)(arr)).toBe(3)
  expect(at(0)(arr)).toBe(1)
  expect(at(1)(arr)).toBe(2)
  expect(at(2)(arr)).toBe(3)
  expect(at(3)(arr)).toBe(undefined)
})

it('throws an error if array is nil', () => {
  expect(() => at(0, null)).toThrowError(
    new TypeError(`Cannot read property 'length' of null`)
  )
})
