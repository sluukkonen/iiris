import { unary } from '../../src/function/unary.js'

it('returns an unary version of a function', () => {
  const fn = (a, b, c) => [a, b, c]
  const wrapped = unary(fn)

  expect(wrapped).toHaveLength(1)
  expect(wrapped.name).toEqual('unary1')
  expect(wrapped(1, 2, 3)).toEqual([1, undefined, undefined])
})
