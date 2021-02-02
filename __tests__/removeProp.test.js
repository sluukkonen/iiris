import { removeProp } from '../src/removeProp'

it('removes the specified property from an object', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(removeProp('a', obj)).toEqual({ b: 2, c: 3 })
  expect(removeProp('b', obj)).toEqual({ a: 1, c: 3 })
  expect(removeProp('c', obj)).toEqual({ a: 1, b: 2 })
  expect(removeProp('d', obj)).toEqual(obj)
})

it('returns an empty object if the target is not an object', () => {
  expect(() => removeProp('a', null)).toThrowError(TypeError)
  expect(() => removeProp('a', undefined)).toThrowError(TypeError)
  expect(() => removeProp('a', '')).toThrowError(TypeError)
})
