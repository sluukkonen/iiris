import { forEachIndexed } from '../src/forEachIndexed'

it('executes the callback for each element of the array, returning the array', () => {
  const fn = jest.fn()
  const array = ['a', 'b', 'c']

  expect(forEachIndexed(fn, array)).toBe(array)
  expect(fn.mock.calls).toEqual([
    [0, 'a'],
    [1, 'b'],
    [2, 'c'],
  ])
})
