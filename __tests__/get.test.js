import { get } from '../src/get'

describe('objects', () => {
  it('retrieves a property from an object', () => {
    const obj = { a: 1, b: 2, c: 3 }

    expect(get('a', obj)).toBe(1)
    expect(get('b', obj)).toBe(2)
    expect(get('c', obj)).toBe(3)
    expect(get('d', obj)).toBe(undefined)

    expect(get('a')(obj)).toBe(1)
    expect(get('b')(obj)).toBe(2)
    expect(get('c')(obj)).toBe(3)
    expect(get('d')(obj)).toBe(undefined)
  })

  it('returns undefined if the target is not an object', () => {
    expect(get('a', null)).toBeUndefined()
    expect(get('a', undefined)).toBeUndefined()
    expect(get('length', '')).toBeUndefined()

    expect(get('a')(null)).toBeUndefined()
    expect(get('a')(undefined)).toBeUndefined()
    expect(get('length')('')).toBeUndefined()
  })
})

describe('arrays', () => {
  it('retrieves an element from an array', () => {
    const arr = [1, 2, 3]

    expect(get(-4, arr)).toBe(undefined)
    expect(get(-3, arr)).toBe(1)
    expect(get(-2, arr)).toBe(2)
    expect(get(-1, arr)).toBe(3)
    expect(get(0, arr)).toBe(1)
    expect(get(1, arr)).toBe(2)
    expect(get(2, arr)).toBe(3)
    expect(get(3, arr)).toBe(undefined)

    expect(get(-4)(arr)).toBe(undefined)
    expect(get(-3)(arr)).toBe(1)
    expect(get(-2)(arr)).toBe(2)
    expect(get(-1)(arr)).toBe(3)
    expect(get(0)(arr)).toBe(1)
    expect(get(1)(arr)).toBe(2)
    expect(get(2)(arr)).toBe(3)
    expect(get(3)(arr)).toBe(undefined)
  })

  it('returns undefined if the target is not an array', () => {
    expect(get(0, null)).toBeUndefined()
    expect(get(0, undefined)).toBeUndefined()
    expect(get(0, '')).toBeUndefined()

    expect(get(0)(null)).toBeUndefined()
    expect(get(0)(undefined)).toBeUndefined()
    expect(get(0)('')).toBeUndefined()
  })
})

it('throws an exception if key is not a string or an integer', () => {
  expect(() => get(true, {})).toThrowError(TypeError)
  expect(() => get(-1.5, {})).toThrowError(TypeError)
  expect(() => get(1.5, [])).toThrowError(TypeError)

  expect(() => get(true)({})).toThrowError(TypeError)
  expect(() => get(-1.5)({})).toThrowError(TypeError)
  expect(() => get(1.5)([])).toThrowError(TypeError)
})
