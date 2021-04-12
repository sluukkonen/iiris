import { isArray } from '../../src/core/isArray.js'

it('returns if the value is an array', () => {
  expect(isArray('')).toBe(false)
  expect(isArray(null)).toBe(false)
  expect(isArray(undefined)).toBe(false)
  expect(isArray(true)).toBe(false)
  expect(isArray(false)).toBe(false)
  expect(isArray({})).toBe(false)
  expect(isArray([])).toBe(true)
  expect(isArray(0)).toBe(false)
  expect(isArray(0n)).toBe(false)
  expect(isArray(NaN)).toBe(false)
  expect(isArray(Infinity)).toBe(false)
  expect(isArray(-Infinity)).toBe(false)
  expect(isArray(Symbol.for(''))).toBe(false)
  expect(isArray(() => {})).toBe(false)
})
