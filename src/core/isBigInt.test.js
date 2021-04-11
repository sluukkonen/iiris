import { isBigInt } from './isBigInt.js'

it('returns if the value is a bigint', () => {
  expect(isBigInt('')).toBe(false)
  expect(isBigInt(null)).toBe(false)
  expect(isBigInt(undefined)).toBe(false)
  expect(isBigInt(true)).toBe(false)
  expect(isBigInt(false)).toBe(false)
  expect(isBigInt({})).toBe(false)
  expect(isBigInt([])).toBe(false)
  expect(isBigInt(0)).toBe(false)
  expect(isBigInt(0n)).toBe(true)
  expect(isBigInt(NaN)).toBe(false)
  expect(isBigInt(Infinity)).toBe(false)
  expect(isBigInt(-Infinity)).toBe(false)
  expect(isBigInt(Symbol.for(''))).toBe(false)
  expect(isBigInt(() => {})).toBe(false)
})
