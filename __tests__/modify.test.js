import { modify } from '../src/modify'

describe('objects', () => {
  it('modifies a property at the specified value', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const inc = (x) => x + 1

    expect(modify('a', inc, obj)).toEqual({ a: 2, b: 2, c: 3 })
    expect(modify('b', inc, obj)).toEqual({ a: 1, b: 3, c: 3 })
    expect(modify('c', inc, obj)).toEqual({ a: 1, b: 2, c: 4 })
    expect(modify('d', inc, obj)).toEqual({ a: 1, b: 2, c: 3, d: NaN })
  })

  it('removes the property if the function returns undefined', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const noop = () => {}

    expect(modify('a', noop, obj)).toEqual({ b: 2, c: 3 })
    expect(modify('b', noop, obj)).toEqual({ a: 1, c: 3 })
    expect(modify('c', noop, obj)).toEqual({ a: 1, b: 2 })
    expect(modify('d', noop, obj)).toEqual(obj)
  })

  it('throws an error if the target is not an object', () => {
    const one = () => 1

    expect(() => modify('a', one, null)).toThrowError(TypeError)
    expect(() => modify('a', one, undefined)).toThrowError(TypeError)
    expect(() => modify('a', one, '')).toThrowError(TypeError)
  })
})

describe('arrays', () => {
  it('sets the element at an index to the specified value', () => {
    const arr = [1, 2, 3]
    const inc = (x) => x + 1

    expect(modify(-3, inc, arr)).toEqual([2, 2, 3])
    expect(modify(-2, inc, arr)).toEqual([1, 3, 3])
    expect(modify(-1, inc, arr)).toEqual([1, 2, 4])
    expect(modify(0, inc, arr)).toEqual([2, 2, 3])
    expect(modify(1, inc, arr)).toEqual([1, 3, 3])
    expect(modify(2, inc, arr)).toEqual([1, 2, 4])
  })

  it('removes the element if value is undefined and index is within bounds', () => {
    const arr = [1, 2, 3]
    const noop = () => {}

    expect(modify(-3, noop, arr)).toEqual([2, 3])
    expect(modify(-2, noop, arr)).toEqual([1, 3])
    expect(modify(-1, noop, arr)).toEqual([1, 2])
    expect(modify(0, noop, arr)).toEqual([2, 3])
    expect(modify(1, noop, arr)).toEqual([1, 3])
    expect(modify(2, noop, arr)).toEqual([1, 2])
  })

  it('throws an error if array index is out of bounds', () => {
    const arr = [1, 2, 3]
    const noop = () => {}

    expect(() => modify(-5, noop, arr)).toThrowError(RangeError)
    expect(() => modify(-4, noop, arr)).toThrowError(RangeError)
    expect(() => modify(3, noop, arr)).toThrowError(RangeError)
    expect(() => modify(4, noop, arr)).toThrowError(RangeError)
  })

  it('throws an error if the target is not an array', () => {
    const one = () => 1

    expect(() => modify(0, one, null)).toThrowError(TypeError)
    expect(() => modify(1, one, undefined)).toThrowError(TypeError)
    expect(() => modify(0, one, {})).toThrowError(TypeError)
    expect(() => modify(1, one, '')).toThrowError(TypeError)
  })
})

it('throws an exception if key is not a string or an integer', () => {
  const zero = () => 0

  expect(() => modify(true, zero, [])).toThrowError(TypeError)
  expect(() => modify(-1.5, zero, [])).toThrowError(TypeError)
  expect(() => modify(1.5, zero, [])).toThrowError(TypeError)
})
