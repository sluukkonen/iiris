import { reduce } from '../src/reduce'

it('reduces an array from left to right', () => {
  const add = (a, b) => a + b

  expect(reduce(add, 0, [])).toEqual(0)
  expect(reduce(add, 0, [1])).toEqual(1)
  expect(reduce(add, 0, [1, 2])).toEqual(3)
  expect(reduce(add, 0, [1, 2, 3])).toEqual(6)
})

it('passes the array index in the third argument', () => {
  const fn = jest.fn((a, b) => a + b)
  const array = [1, 2, 3]

  reduce(fn, 0, array)

  expect(fn.mock.calls).toEqual([
    [0, 1, 0, array],
    [1, 2, 1, array],
    [3, 3, 2, array],
  ])
})
