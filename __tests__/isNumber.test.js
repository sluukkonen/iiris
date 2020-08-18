import { isNumber } from '../src'

it('returns if the value is a number', () => {
  expect(isNumber('')).toBe(false)
  expect(isNumber(null)).toBe(false)
  expect(isNumber(undefined)).toBe(false)
  expect(isNumber(true)).toBe(false)
  expect(isNumber(false)).toBe(false)
  expect(isNumber({})).toBe(false)
  expect(isNumber([])).toBe(false)
  expect(isNumber(0)).toBe(true)
  expect(isNumber(0n)).toBe(false)
  expect(isNumber(NaN)).toBe(true)
  expect(isNumber(Infinity)).toBe(true)
  expect(isNumber(-Infinity)).toBe(true)
  expect(isNumber(Symbol.for(''))).toBe(false)
  expect(isNumber(() => {})).toBe(false)
})
