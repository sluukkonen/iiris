import { from } from './from.js'

it('creates an array from an iterable', () => {
  expect(from([])).toEqual([])
  expect(from([1])).toEqual([1])
  expect(from([1, 2])).toEqual([1, 2])
  expect(from([1, 2, 3])).toEqual([1, 2, 3])

  expect(from(new Set())).toEqual([])
  expect(from(new Set([1]))).toEqual([1])
  expect(from(new Set([1, 2]))).toEqual([1, 2])
  expect(from(new Set([1, 2, 3]))).toEqual([1, 2, 3])
})
