import { isSymbol } from '../../src/core/isSymbol.js'

it('returns if the value is a symbol', () => {
  expect(isSymbol('')).toBe(false)
  expect(isSymbol(null)).toBe(false)
  expect(isSymbol(undefined)).toBe(false)
  expect(isSymbol(true)).toBe(false)
  expect(isSymbol(false)).toBe(false)
  expect(isSymbol({})).toBe(false)
  expect(isSymbol([])).toBe(false)
  expect(isSymbol(0)).toBe(false)
  expect(isSymbol(0n)).toBe(false)
  expect(isSymbol(NaN)).toBe(false)
  expect(isSymbol(Infinity)).toBe(false)
  expect(isSymbol(-Infinity)).toBe(false)
  expect(isSymbol(Symbol.for(''))).toBe(true)
  expect(isSymbol(() => {})).toBe(false)
})
