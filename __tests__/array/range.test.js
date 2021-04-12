import { range } from '../../src/array/range.js'

it('creates an array from start (inclusive) to end (exclusive)', () => {
  expect(range(0, 3)).toEqual([0, 1, 2])
  expect(range(1, 5)).toEqual([1, 2, 3, 4])
})

it('returns an empty array if start > end', () => {
  expect(range(0, -1)).toEqual([])
})

it('throws an error if end - start is not an integer', () => {
  expect(() => range(0, 0.5)).toThrowError(
    new RangeError('Invalid array length')
  )
})
