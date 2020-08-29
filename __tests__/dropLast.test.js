import { dropLast } from '../src/dropLast'

it('drops the specified amount of elements from the beginning of an array', () => {
  expect(dropLast(0, [1, 2, 3])).toEqual([1, 2, 3])
  expect(dropLast(1, [1, 2, 3])).toEqual([1, 2])
  expect(dropLast(2, [1, 2, 3])).toEqual([1])
  expect(dropLast(3, [1, 2, 3])).toEqual([])
  expect(dropLast(4, [1, 2, 3])).toEqual([])
})

it('treats negative values equivalent to 0', () => {
  expect(dropLast(-1, [1, 2, 3])).toEqual([1, 2, 3])
})
