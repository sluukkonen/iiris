import { arityN } from '../src'

describe('arityN()', () => {
  it('returns a wrapped function with the specified arity', () => {
    const fn = (a, b, c, d, e, f) => [a, b, c, d, e, f].filter(Boolean)

    for (const arity of [0, 1, 2, 3, 4, 5]) {
      const wrapped = arityN(arity, fn)
      const args = [1, 2, 3, 4, 5]

      expect(wrapped.length).toEqual(arity)
      expect(wrapped.name).toEqual(fn.name)
      expect(wrapped(...args)).toEqual(args.slice(0, arity))
    }
  })

  it('throws an error for unsupported arities', () => {
    const fn = () => {}
    expect(() => arityN(6, fn)).toThrowError(
      'arityN: arities higher than 5 are not supported'
    )
  })
})
