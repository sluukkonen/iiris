import { forEach } from './forEach.js'

it('executes the callback for each element of the array, returning the array', () => {
  const fn = jest.fn()
  const array = ['a', 'b', 'c']

  expect(forEach(fn, array)).toBe(array)
  expect(fn.mock.calls).toEqual([['a'], ['b'], ['c']])
})
