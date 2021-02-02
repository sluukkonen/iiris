import { atOr } from '../src/atOr'

it('retrieves an element or the default value from an array', () => {
  const arr = [1, 2, 3]

  expect(atOr(0, -4, arr)).toBe(0)
  expect(atOr(0, -3, arr)).toBe(1)
  expect(atOr(0, -2, arr)).toBe(2)
  expect(atOr(0, -1, arr)).toBe(3)
  expect(atOr(0, 0, arr)).toBe(1)
  expect(atOr(0, 1, arr)).toBe(2)
  expect(atOr(0, 2, arr)).toBe(3)
  expect(atOr(0, 3, arr)).toBe(0)

  expect(atOr(0, -4)(arr)).toBe(0)
  expect(atOr(0, -3)(arr)).toBe(1)
  expect(atOr(0, -2)(arr)).toBe(2)
  expect(atOr(0, -1)(arr)).toBe(3)
  expect(atOr(0, 0)(arr)).toBe(1)
  expect(atOr(0, 1)(arr)).toBe(2)
  expect(atOr(0, 2)(arr)).toBe(3)
  expect(atOr(0, 3)(arr)).toBe(0)
})

it('returns the default value if the element is undefined', () => {
  expect(atOr(0, 0, [undefined])).toBe(0)
})

it('returns the default value if the target is not an array', () => {
  expect(atOr(0, 0, null)).toBe(0)
  expect(atOr(0, 0, undefined)).toBe(0)
  expect(atOr(0, 0, '')).toBe(0)

  expect(atOr(0, 0)(null)).toBe(0)
  expect(atOr(0, 0)(undefined)).toBe(0)
  expect(atOr(0, 0)('')).toBe(0)
})
