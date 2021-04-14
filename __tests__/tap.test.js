import { tap } from '../src/tap.js'

it('calls a unary function and returns the argument', () => {
  const fn = jest.fn()

  expect(tap(fn)(1)).toEqual(1)
  expect(tap(fn)(2)).toEqual(2)

  expect(fn.mock.calls).toEqual([[1], [2]])
})
