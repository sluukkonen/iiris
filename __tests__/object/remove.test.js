import { remove } from '../../src/object/remove.js'

it('removes the specified property from an object', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(remove('a', obj)).toEqual({ b: 2, c: 3 })
  expect(remove('b', obj)).toEqual({ a: 1, c: 3 })
  expect(remove('c', obj)).toEqual({ a: 1, b: 2 })
})

it('returns the original object if object doesnt contain the property', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(remove('d', obj)).toBe(obj)
})
