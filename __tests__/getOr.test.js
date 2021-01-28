import { getOr } from '../src/getOr'

describe('objects', () => {
  it('retrieves a property or a default value from an object', () => {
    const obj = { a: 1, b: 2, c: 3 }

    expect(getOr(0, 'a', obj)).toBe(1)
    expect(getOr(0, 'b', obj)).toBe(2)
    expect(getOr(0, 'c', obj)).toBe(3)
    expect(getOr(0, 'd', obj)).toBe(0)

    expect(getOr(0, 'a')(obj)).toBe(1)
    expect(getOr(0, 'b')(obj)).toBe(2)
    expect(getOr(0, 'c')(obj)).toBe(3)
    expect(getOr(0, 'd')(obj)).toBe(0)
  })

  it('returns the default value if the value is undefined', () => {
    expect(getOr(0, 'a', { a: undefined })).toBe(0)
  })

  it('returns the default value if the target is not an object', () => {
    expect(getOr(0, 'a', null)).toBe(0)
    expect(getOr(0, 'a', undefined)).toBe(0)
    expect(getOr(0, 'length', '')).toBe(0)

    expect(getOr(0, 'a')(null)).toBe(0)
    expect(getOr(0, 'a')(undefined)).toBe(0)
    expect(getOr(0, 'length')('')).toBe(0)
  })
})

describe('arrays', () => {
  it('retrieves an element or the default value from an array', () => {
    const arr = [1, 2, 3]

    expect(getOr(0, -4, arr)).toBe(0)
    expect(getOr(0, -3, arr)).toBe(1)
    expect(getOr(0, -2, arr)).toBe(2)
    expect(getOr(0, -1, arr)).toBe(3)
    expect(getOr(0, 0, arr)).toBe(1)
    expect(getOr(0, 1, arr)).toBe(2)
    expect(getOr(0, 2, arr)).toBe(3)
    expect(getOr(0, 3, arr)).toBe(0)

    expect(getOr(0, -4)(arr)).toBe(0)
    expect(getOr(0, -3)(arr)).toBe(1)
    expect(getOr(0, -2)(arr)).toBe(2)
    expect(getOr(0, -1)(arr)).toBe(3)
    expect(getOr(0, 0)(arr)).toBe(1)
    expect(getOr(0, 1)(arr)).toBe(2)
    expect(getOr(0, 2)(arr)).toBe(3)
    expect(getOr(0, 3)(arr)).toBe(0)
  })

  it('returns the default value if the element is undefined', () => {
    expect(getOr(0, 0, [undefined])).toBe(0)
  })

  it('returns the default value if the target is not an array', () => {
    expect(getOr(0, 0, null)).toBe(0)
    expect(getOr(0, 0, undefined)).toBe(0)
    expect(getOr(0, 0, '')).toBe(0)

    expect(getOr(0, 0)(null)).toBe(0)
    expect(getOr(0, 0)(undefined)).toBe(0)
    expect(getOr(0, 0)('')).toBe(0)
  })
})
