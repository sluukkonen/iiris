import { at } from '../src/at'

it('retrieves an element from an array', () => {
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

it('returns undefined if the target is not an array', () => {
  expect(at(0, null)).toBeUndefined()
  expect(at(0, undefined)).toBeUndefined()
  expect(at(0, '')).toBeUndefined()

  expect(at(0)(null)).toBeUndefined()
  expect(at(0)(undefined)).toBeUndefined()
  expect(at(0)('')).toBeUndefined()
})
