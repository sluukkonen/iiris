import { removeProp } from '../src/removeProp'

it('removes the specified property from an object', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(removeProp('a', obj)).toEqual({ b: 2, c: 3 })
  expect(removeProp('b', obj)).toEqual({ a: 1, c: 3 })
  expect(removeProp('c', obj)).toEqual({ a: 1, b: 2 })
})

it('returns the original object if object doesnt contain the property', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(removeProp('d', obj)).toBe(obj)
})
