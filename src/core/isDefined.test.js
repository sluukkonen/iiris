import { isDefined } from './isDefined.js'

it('returns true if the value is not undefined', () => {
  expect(isDefined('')).toBe(true)
  expect(isDefined(null)).toBe(true)
  expect(isDefined(undefined)).toBe(false)
  expect(isDefined(true)).toBe(true)
  expect(isDefined(false)).toBe(true)
  expect(isDefined({})).toBe(true)
  expect(isDefined([])).toBe(true)
  expect(isDefined(0)).toBe(true)
  expect(isDefined(0n)).toBe(true)
  expect(isDefined(NaN)).toBe(true)
  expect(isDefined(Infinity)).toBe(true)
  expect(isDefined(-Infinity)).toBe(true)
  expect(isDefined(Symbol.for(''))).toBe(true)
  expect(isDefined(() => {})).toBe(true)
})
