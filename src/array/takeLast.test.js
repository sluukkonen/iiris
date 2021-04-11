import { takeLast } from './takeLast.js'

it('takes the specified amount of elements from the end of an array', () => {
  expect(takeLast(0, [1, 2, 3])).toEqual([])
  expect(takeLast(1, [1, 2, 3])).toEqual([3])
  expect(takeLast(2, [1, 2, 3])).toEqual([2, 3])
  expect(takeLast(3, [1, 2, 3])).toEqual([1, 2, 3])
  expect(takeLast(4, [1, 2, 3])).toEqual([1, 2, 3])
})

it('treats negative values equivalent to 0', () => {
  expect(takeLast(-1, [1, 2, 3])).toEqual([])
})
