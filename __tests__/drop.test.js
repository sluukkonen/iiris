import { drop } from '../src/drop'

it('drops the specified amount of elements from the beginning of an array', () => {
  expect(drop(0, [1, 2, 3])).toEqual([1, 2, 3])
  expect(drop(1, [1, 2, 3])).toEqual([2, 3])
  expect(drop(2, [1, 2, 3])).toEqual([3])
  expect(drop(3, [1, 2, 3])).toEqual([])
  expect(drop(4, [1, 2, 3])).toEqual([])
})

it('treats negative values equivalent to 0', () => {
  expect(drop(-1, [1, 2, 3])).toEqual([1, 2, 3])
})
