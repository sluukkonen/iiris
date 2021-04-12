import { take } from '../../src/array/take.js'

it('takes the specified amount of elements from the beginning of an array', () => {
  expect(take(0, [1, 2, 3])).toEqual([])
  expect(take(1, [1, 2, 3])).toEqual([1])
  expect(take(2, [1, 2, 3])).toEqual([1, 2])
  expect(take(3, [1, 2, 3])).toEqual([1, 2, 3])
  expect(take(4, [1, 2, 3])).toEqual([1, 2, 3])
})

it('treats negative values equivalent to 0', () => {
  expect(take(-1, [1, 2, 3])).toEqual([])
})
