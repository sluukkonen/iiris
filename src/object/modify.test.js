import { noop } from '../function/noop.js'
import { inc } from '../math/inc.js'
import { modify } from './modify.js'

it('modifies a property at the specified value', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(modify('a', inc, obj)).toEqual({ a: 2, b: 2, c: 3 })
  expect(modify('b', inc, obj)).toEqual({ a: 1, b: 3, c: 3 })
  expect(modify('c', inc, obj)).toEqual({ a: 1, b: 2, c: 4 })
})

it('removes the property if the function returns undefined', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(modify('a', noop, obj)).toEqual({ b: 2, c: 3 })
  expect(modify('b', noop, obj)).toEqual({ a: 1, c: 3 })
  expect(modify('c', noop, obj)).toEqual({ a: 1, b: 2 })
})

it('returns the original object if the object doesnt contain the property', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(modify('d', inc, obj)).toBe(obj)
  expect(modify('d', noop, obj)).toBe(obj)
})
