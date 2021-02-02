import { modifyProp } from '../src/modifyProp'

it('modifies a property at the specified value', () => {
  const obj = { a: 1, b: 2, c: 3 }
  const inc = (x) => x + 1

  expect(modifyProp('a', inc, obj)).toEqual({ a: 2, b: 2, c: 3 })
  expect(modifyProp('b', inc, obj)).toEqual({ a: 1, b: 3, c: 3 })
  expect(modifyProp('c', inc, obj)).toEqual({ a: 1, b: 2, c: 4 })
  expect(modifyProp('d', inc, obj)).toEqual({ a: 1, b: 2, c: 3, d: NaN })
})

it('removes the property if the function returns undefined', () => {
  const obj = { a: 1, b: 2, c: 3 }
  const noop = () => {}

  expect(modifyProp('a', noop, obj)).toEqual({ b: 2, c: 3 })
  expect(modifyProp('b', noop, obj)).toEqual({ a: 1, c: 3 })
  expect(modifyProp('c', noop, obj)).toEqual({ a: 1, b: 2 })
  expect(modifyProp('d', noop, obj)).toEqual(obj)
})

it('throws an error if the target is not an object', () => {
  const one = () => 1

  expect(() => modifyProp('a', one, null)).toThrowError(TypeError)
  expect(() => modifyProp('a', one, undefined)).toThrowError(TypeError)
  expect(() => modifyProp('a', one, '')).toThrowError(TypeError)
})
