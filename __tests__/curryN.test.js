const { curryN } = require('../src')

describe('curryN()', () => {
  it('returns a curried function with the specified arity', () => {
    const fn = (a, b, c) => [a, b, c]

    expect(curryN(0, fn)(1, 2, 3)).toEqual([1, 2, 3])
    expect(curryN(1, fn)(1, 2, 3)).toEqual([1, 2, 3])

    expect(curryN(2, fn)(1)(2, 3)).toEqual([1, 2, 3])
    expect(curryN(3, fn)(1, 2)(3)).toEqual([1, 2, 3])

    expect(curryN(3, fn)(1)(2, 3)).toEqual([1, 2, 3])
    expect(curryN(3, fn)(1)(2)(3)).toEqual([1, 2, 3])
    expect(curryN(3, fn)(1, 2, 3)).toEqual([1, 2, 3])
  })
})
