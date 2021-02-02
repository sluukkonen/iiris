import { removeAt } from '../src/removeAt'

it('removes the element at an index if index is within bounds', () => {
  const arr = [1, 2, 3]

  expect(removeAt(-4, arr)).toEqual([1, 2, 3])
  expect(removeAt(-3, arr)).toEqual([2, 3])
  expect(removeAt(-2, arr)).toEqual([1, 3])
  expect(removeAt(-1, arr)).toEqual([1, 2])
  expect(removeAt(0, arr)).toEqual([2, 3])
  expect(removeAt(1, arr)).toEqual([1, 3])
  expect(removeAt(2, arr)).toEqual([1, 2])
  expect(removeAt(3, arr)).toEqual([1, 2, 3])
})
