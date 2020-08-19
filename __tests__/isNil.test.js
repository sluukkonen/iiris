import { isNil } from '../src/isNil'

it('returns if the value is null or undefined', () => {
  expect(isNil('')).toBe(false)
  expect(isNil(null)).toBe(true)
  expect(isNil(undefined)).toBe(true)
  expect(isNil(true)).toBe(false)
  expect(isNil(false)).toBe(false)
  expect(isNil({})).toBe(false)
  expect(isNil([])).toBe(false)
  expect(isNil(0)).toBe(false)
  expect(isNil(0n)).toBe(false)
  expect(isNil(NaN)).toBe(false)
  expect(isNil(Infinity)).toBe(false)
  expect(isNil(-Infinity)).toBe(false)
  expect(isNil(Symbol.for(''))).toBe(false)
  expect(isNil(() => {})).toBe(false)
})
