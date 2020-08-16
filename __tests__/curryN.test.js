const { curryN } = require('../src')

describe('curryN()', () => {
  it('returns a curried function with the specified arity', () => {
    const fn = (a, b, c) => [a, b, c]

    expect(curryN(0, fn)(1, 2, 3)).toEqual([undefined, undefined, undefined])
    expect(curryN(1, fn)(1, 2, 3)).toEqual([1, undefined, undefined])

    expect(curryN(2, fn)(1)(2, 3)).toEqual([1, 2, undefined])
    expect(curryN(3, fn)(1, 2)(3)).toEqual([1, 2, 3])

    expect(curryN(3, fn)(1)(2, 3)).toEqual([1, 2, 3])
    expect(curryN(3, fn)(1)(2)(3)).toEqual([1, 2, 3])
    expect(curryN(3, fn)(1, 2, 3)).toEqual([1, 2, 3])
  })
})
