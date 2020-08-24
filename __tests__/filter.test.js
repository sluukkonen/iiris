import { filter } from '../src/filter'

it('returns the elements of an array that match a predicate', () => {
  const isEven = (x) => x % 2 === 0

  expect(filter(isEven, [])).toEqual([])
  expect(filter(isEven, [1])).toEqual([])
  expect(filter(isEven, [1, 2])).toEqual([2])
  expect(filter(isEven, [1, 2, 3])).toEqual([2])
})

it('passes the array index in the second argument', () => {
  const fn = jest.fn()
  filter(fn, ['a', 'b', 'c'])

  expect(fn.mock.calls).toEqual([
    ['a', 0],
    ['b', 1],
    ['c', 2],
  ])
})
