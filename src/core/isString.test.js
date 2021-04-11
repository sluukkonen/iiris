import { isString } from './isString.js'

it('returns if the value is a string', () => {
  expect(isString('')).toBe(true)
  expect(isString(null)).toBe(false)
  expect(isString(undefined)).toBe(false)
  expect(isString(true)).toBe(false)
  expect(isString(false)).toBe(false)
  expect(isString({})).toBe(false)
  expect(isString([])).toBe(false)
  expect(isString(0)).toBe(false)
  expect(isString(0n)).toBe(false)
  expect(isString(NaN)).toBe(false)
  expect(isString(Infinity)).toBe(false)
  expect(isString(-Infinity)).toBe(false)
  expect(isString(Symbol.for(''))).toBe(false)
  expect(isString(() => {})).toBe(false)
})
