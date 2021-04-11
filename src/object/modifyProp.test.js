import { noop } from '../function/noop.js'
import { inc } from '../math/inc.js'
import { modifyProp } from './modifyProp.js'

it('modifies a property at the specified value', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(modifyProp('a', inc, obj)).toEqual({ a: 2, b: 2, c: 3 })
  expect(modifyProp('b', inc, obj)).toEqual({ a: 1, b: 3, c: 3 })
  expect(modifyProp('c', inc, obj)).toEqual({ a: 1, b: 2, c: 4 })
})

it('removes the property if the function returns undefined', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(modifyProp('a', noop, obj)).toEqual({ b: 2, c: 3 })
  expect(modifyProp('b', noop, obj)).toEqual({ a: 1, c: 3 })
  expect(modifyProp('c', noop, obj)).toEqual({ a: 1, b: 2 })
})

it('returns the original object if the object doesnt contain the property', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(modifyProp('d', inc, obj)).toBe(obj)
  expect(modifyProp('d', noop, obj)).toBe(obj)
})
