import { curry } from '../src'

describe('curry()', () => {
  it('arity = 0', () => {
    const fn = () => []
    const curried = curry(fn)

    expect(curried).toHaveLength(0)
    expect(curried.name).toBe(fn.name)
    expect(curried()).toEqual(fn())
  })

  it('arity = 1', () => {
    const fn = (a) => [a]
    const curried = curry(fn)

    expect(curried).toHaveLength(1)
    expect(curried.name).toBe(fn.name)
    expect(curried()).toEqual([undefined])
    expect(curried(1)).toEqual([1])
  })
  it('arity = 2', () => {
    const fn = (a, b) => [a, b]
    const curried = curry(fn)

    expect(curried).toHaveLength(2)
    expect(curried.name).toBe(fn.name)
    expect(curried(1, 2)).toEqual([1, 2])
    expect(curried(1)(2)).toEqual([1, 2])
  })

  it('arity = 3', () => {
    const fn = (a, b, c) => [a, b, c]
    const curried = curry(fn)

    expect(curried).toHaveLength(3)
    expect(curried.name).toBe(fn.name)

    expect(curried(1, 2, 3)).toEqual([1, 2, 3])
    expect(curried(1)(2)(3)).toEqual([1, 2, 3])
    expect(curried(1, 2)(3)).toEqual([1, 2, 3])
    expect(curried(1)(2, 3)).toEqual([1, 2, 3])
  })

  it('arity = 4', () => {
    const fn = (a, b, c, d) => [a, b, c, d]
    expect(() => curry(fn)).toThrowError('Not implemented!')
  })
})
