import { isNull } from '../../src/isNull.js'

it('returns if the value is null', () => {
  expect(isNull('')).toBe(false)
  expect(isNull(null)).toBe(true)
  expect(isNull(undefined)).toBe(false)
  expect(isNull(true)).toBe(false)
  expect(isNull(false)).toBe(false)
  expect(isNull({})).toBe(false)
  expect(isNull([])).toBe(false)
  expect(isNull(0)).toBe(false)
  expect(isNull(0n)).toBe(false)
  expect(isNull(NaN)).toBe(false)
  expect(isNull(Infinity)).toBe(false)
  expect(isNull(-Infinity)).toBe(false)
  expect(isNull(Symbol.for(''))).toBe(false)
  expect(isNull(() => {})).toBe(false)
})
