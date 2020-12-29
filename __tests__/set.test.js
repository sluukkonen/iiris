import { set } from '../src/set'

describe('objects', () => {
  it('sets a property to the specified value', () => {
    const obj = { a: 1, b: 2, c: 3 }

    expect(set('a', 4, obj)).toEqual({ a: 4, b: 2, c: 3 })
    expect(set('b', 4, obj)).toEqual({ a: 1, b: 4, c: 3 })
    expect(set('c', 4, obj)).toEqual({ a: 1, b: 2, c: 4 })
    expect(set('d', 4, obj)).toEqual({ a: 1, b: 2, c: 3, d: 4 })
  })

  it('removes the property if value is undefined', () => {
    const obj = { a: 1, b: 2, c: 3 }

    expect(set('a', undefined, obj)).toEqual({ b: 2, c: 3 })
    expect(set('b', undefined, obj)).toEqual({ a: 1, c: 3 })
    expect(set('c', undefined, obj)).toEqual({ a: 1, b: 2 })
    expect(set('d', undefined, obj)).toEqual(obj)
  })

  it('throws an error if the target is not an object', () => {
    expect(() => set('a', 1, null)).toThrowError(TypeError)
    expect(() => set('a', 1, undefined)).toThrowError(TypeError)
    expect(() => set('a', 1, '')).toThrowError(TypeError)
  })
})

describe('arrays', () => {
  it('sets the element at an index to the specified value', () => {
    const arr = [1, 2, 3]

    expect(set(-3, 999, arr)).toEqual([999, 2, 3])
    expect(set(-2, 999, arr)).toEqual([1, 999, 3])
    expect(set(-1, 999, arr)).toEqual([1, 2, 999])
    expect(set(0, 999, arr)).toEqual([999, 2, 3])
    expect(set(1, 999, arr)).toEqual([1, 999, 3])
    expect(set(2, 999, arr)).toEqual([1, 2, 999])
  })

  it('removes the element if the new value is undefined', () => {
    const arr = [1, 2, 3]

    expect(set(-3, undefined, arr)).toEqual([2, 3])
    expect(set(-2, undefined, arr)).toEqual([1, 3])
    expect(set(-1, undefined, arr)).toEqual([1, 2])
    expect(set(0, undefined, arr)).toEqual([2, 3])
    expect(set(1, undefined, arr)).toEqual([1, 3])
    expect(set(2, undefined, arr)).toEqual([1, 2])
  })

  it('throws an error if the target is not an array', () => {
    expect(() => set(0, 1, null)).toThrowError(TypeError)
    expect(() => set(0, 1, undefined)).toThrowError(TypeError)
    expect(() => set(0, 1, {})).toThrowError(TypeError)
    expect(() => set(0, 1, '')).toThrowError(TypeError)
  })
})

it('throws an exception if key is not a string or a positive integer', () => {
  expect(() => set(true, 0, [])).toThrowError(TypeError)
  expect(() => set(1.5, 0, [])).toThrowError(TypeError)
})
