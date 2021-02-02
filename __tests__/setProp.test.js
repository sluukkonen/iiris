import { setProp } from '../src/setProp'

it('sets a property to the specified value', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(setProp('a', 4, obj)).toEqual({ a: 4, b: 2, c: 3 })
  expect(setProp('b', 4, obj)).toEqual({ a: 1, b: 4, c: 3 })
  expect(setProp('c', 4, obj)).toEqual({ a: 1, b: 2, c: 4 })
  expect(setProp('d', 4, obj)).toEqual({ a: 1, b: 2, c: 3, d: 4 })
})

it('removes the property if value is undefined', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(setProp('a', undefined, obj)).toEqual({ b: 2, c: 3 })
  expect(setProp('b', undefined, obj)).toEqual({ a: 1, c: 3 })
  expect(setProp('c', undefined, obj)).toEqual({ a: 1, b: 2 })
  expect(setProp('d', undefined, obj)).toEqual(obj)
})

it('throws an error if the target is not an object', () => {
  expect(() => setProp('a', 1, null)).toThrowError(TypeError)
  expect(() => setProp('a', 1, undefined)).toThrowError(TypeError)
  expect(() => setProp('a', 1, '')).toThrowError(TypeError)
})
