import { zipObject } from '../../src/array/zipObject.js'

it('creates an object from an array of keys and values', () => {
  expect(zipObject([], [])).toEqual({})
  expect(zipObject(['a'], [])).toEqual({})
  expect(zipObject([], [1])).toEqual({})
  expect(zipObject(['a'], [1])).toEqual({ a: 1 })
  expect(zipObject(['a'], [1, 2])).toEqual({ a: 1 })
  expect(zipObject(['a', 'b'], [1])).toEqual({ a: 1 })
  expect(zipObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 })
})
