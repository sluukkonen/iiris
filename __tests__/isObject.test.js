import { isObject } from '../src/isObject'

it('returns if the value is a non-null object', () => {
  expect(isObject('')).toBe(false)
  expect(isObject(null)).toBe(false)
  expect(isObject(undefined)).toBe(false)
  expect(isObject(true)).toBe(false)
  expect(isObject(false)).toBe(false)
  expect(isObject({})).toBe(true)
  expect(isObject([])).toBe(true)
  expect(isObject(0)).toBe(false)
  expect(isObject(0n)).toBe(false)
  expect(isObject(NaN)).toBe(false)
  expect(isObject(Infinity)).toBe(false)
  expect(isObject(-Infinity)).toBe(false)
  expect(isObject(Symbol.for(''))).toBe(false)
  expect(isObject(() => {})).toBe(true)
})
