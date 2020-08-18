import { binary } from '../src'

it('returns an binary version of a function', () => {
  const fn = (a, b, c) => [a, b, c]
  const wrapped = binary(fn)

  expect(wrapped).toHaveLength(2)
  expect(wrapped.name).toEqual('arity2')
  expect(wrapped(1, 2, 3)).toEqual([1, 2, undefined])
})
