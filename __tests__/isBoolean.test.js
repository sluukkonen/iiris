import { isBoolean } from '../src/isBoolean.js'

it('returns if the value is a boolean', () => {
  expect(isBoolean('')).toBe(false)
  expect(isBoolean(null)).toBe(false)
  expect(isBoolean(undefined)).toBe(false)
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(false)).toBe(true)
  expect(isBoolean({})).toBe(false)
  expect(isBoolean([])).toBe(false)
  expect(isBoolean(0)).toBe(false)
  expect(isBoolean(0n)).toBe(false)
  expect(isBoolean(NaN)).toBe(false)
  expect(isBoolean(Infinity)).toBe(false)
  expect(isBoolean(-Infinity)).toBe(false)
  expect(isBoolean(Symbol.for(''))).toBe(false)
  expect(isBoolean(() => {})).toBe(false)
})
