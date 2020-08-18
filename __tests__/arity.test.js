import { arity } from '../src'

it.each([[0], [1], [2], [3], [4]])(
  'returns a wrapped function with arity = %d',
  (n) => {
    const fn = (a1, a2, a3, a4, a5) => [a1, a2, a3, a4, a5].filter(Boolean)

    const wrapped = arity(n, fn)
    const args = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const specialized = n < 4

    expect(wrapped.length).toEqual(specialized ? n : 0)
    expect(wrapped.name).toEqual(specialized ? `arity${n}` : 'arityN')
    expect(wrapped(...args)).toEqual(args.slice(0, n))
  }
)
