import { pick } from '../../src/object/pick.js'

it('picks the specified keys from an object', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(pick([], obj)).toEqual({})
  expect(pick(['a'], obj)).toEqual({ a: 1 })
  expect(pick(['a', 'b'], obj)).toEqual({ a: 1, b: 2 })
  expect(pick(['a', 'b', 'c'], obj)).toEqual({ a: 1, b: 2, c: 3 })
  expect(pick(['a', 'b', 'c', 'd'], obj)).toEqual({ a: 1, b: 2, c: 3 })
})
