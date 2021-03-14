import { filterIndexed } from '../src/filterIndexed'

it('returns the elements of an array that match a predicate', () => {
  const isEven = jest.fn((i) => i % 2 === 0)

  expect(filterIndexed(isEven, [])).toEqual([])
  expect(filterIndexed(isEven, [1])).toEqual([1])
  expect(filterIndexed(isEven, [1, 2])).toEqual([1])
  expect(filterIndexed(isEven, [1, 2, 3])).toEqual([1, 3])

  expect(isEven.mock.calls).toEqual([
    [0, 1],
    [0, 1],
    [1, 2],
    [0, 1],
    [1, 2],
    [2, 3],
  ])
})
