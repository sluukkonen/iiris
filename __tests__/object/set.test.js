import { set } from '../../src/object/set.js'

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
