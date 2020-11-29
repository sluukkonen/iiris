import { remove } from '../src/remove'

describe('objects', () => {
  it('removes the specified property from an object', () => {
    const obj = { a: 1, b: 2, c: 3 }

    expect(remove('a', obj)).toEqual({ b: 2, c: 3 })
    expect(remove('b', obj)).toEqual({ a: 1, c: 3 })
    expect(remove('c', obj)).toEqual({ a: 1, b: 2 })
    expect(remove('d', obj)).toEqual(obj)
  })

  it('returns an empty object if the target is not an object', () => {
    expect(remove('a', null)).toEqual({})
    expect(remove('a', undefined)).toEqual({})
    expect(remove('a', '')).toEqual({})
  })
})

describe('arrays', () => {
  it('removes the element at an index if index is within bounds', () => {
    const arr = [1, 2, 3]

    expect(remove(-5, arr)).toEqual([1, 2, 3])
    expect(remove(-4, arr)).toEqual([1, 2, 3])
    expect(remove(-3, arr)).toEqual([2, 3])
    expect(remove(-2, arr)).toEqual([1, 3])
    expect(remove(-1, arr)).toEqual([1, 2])
    expect(remove(0, arr)).toEqual([2, 3])
    expect(remove(1, arr)).toEqual([1, 3])
    expect(remove(2, arr)).toEqual([1, 2])
    expect(remove(3, arr)).toEqual(arr)
    expect(remove(4, arr)).toEqual(arr)
  })

  it('returns an empty array if the target is not an array', () => {
    expect(remove(1, null)).toEqual([])
    expect(remove(1, undefined)).toEqual([])
    expect(remove(1, '')).toEqual([])
  })
})

it('throws an exception if key is not a string or a positive integer', () => {
  expect(() => remove(true, [])).toThrowError(TypeError)
  expect(() => remove(1.5, [])).toThrowError(TypeError)
})
