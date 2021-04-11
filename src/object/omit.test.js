import { omit } from './omit.js'

it('omits the specified keys from an object', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(omit([], obj)).toEqual(obj)
  expect(omit(['a'], obj)).toEqual({ b: 2, c: 3 })
  expect(omit(['a', 'b'], obj)).toEqual({ c: 3 })
  expect(omit(['a', 'b', 'c'], obj)).toEqual({})
  expect(omit(['a', 'b', 'c', 'd'], obj)).toEqual({})
})
