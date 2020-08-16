import { isUndefined } from '../src/isUndefined'

describe('isUndefined()', () => {
  it('returns true if the value is undefined', () => {
    expect(isUndefined('')).toBe(false)
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(true)).toBe(false)
    expect(isUndefined(false)).toBe(false)
    expect(isUndefined({})).toBe(false)
    expect(isUndefined([])).toBe(false)
    expect(isUndefined(0)).toBe(false)
    expect(isUndefined(0n)).toBe(false)
    expect(isUndefined(NaN)).toBe(false)
    expect(isUndefined(Infinity)).toBe(false)
    expect(isUndefined(-Infinity)).toBe(false)
    expect(isUndefined(Symbol.for(''))).toBe(false)
    expect(isUndefined(() => {})).toBe(false)
  })
})
