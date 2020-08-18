import { curry } from '../src'

it('arity = 0', () => {
  const fn = (a) => [a]
  const curried = curry(fn)

  expect(curried).toBe(fn)

  expect(curried(1)).toEqual([1])
})

it('arity = 1', () => {
  const fn = (a) => [a]
  const curried = curry(fn)

  expect(curried).toBe(fn)

  expect(curried(1)).toEqual([1])
  expect(curried()).toEqual([undefined])
})
it('arity = 2', () => {
  const fn = (a, b) => [a, b]
  const curried = curry(fn)

  expect(curried).toHaveLength(2)
  expect(curried.name).toBe('curry2')
  expect(curried(1).name).toBe('curry21')

  expect(curried(1, 2)).toEqual([1, 2])
  expect(curried(1)(2)).toEqual([1, 2])
  expect(curried()()).toEqual([undefined, undefined])
})

it('arity = 3', () => {
  const fn = (a, b, c) => [a, b, c]
  const curried = curry(fn)

  expect(curried).toHaveLength(3)
  expect(curried.name).toBe('curry3')
  expect(curried(1).name).toBe('curry31')
  expect(curried(1)(2).name).toBe('curry32')

  expect(curried(1, 2, 3)).toEqual([1, 2, 3])
  expect(curried(1)(2)(3)).toEqual([1, 2, 3])
  expect(curried(1, 2)(3)).toEqual([1, 2, 3])
  expect(curried(1)(2, 3)).toEqual([1, 2, 3])
  expect(curried()()()).toEqual([undefined, undefined, undefined])
})

it('arity = 4', () => {
  const fn = (a, b, c, d) => [a, b, c, d]
  const curried = curry(fn)

  // Functions on the generic path do not have their length set. At least not yet.
  expect(curried).toHaveLength(0)
  expect(curried.name).toBe('curryN')
  expect(curried(1).name).toBe('curryN')
  expect(curried(1)(2).name).toBe('curryN')
  expect(curried(1)(2)(3).name).toBe('curryN')

  expect(curried(1, 2, 3, 4)).toEqual([1, 2, 3, 4])
  expect(curried(1, 2, 3)(4)).toEqual([1, 2, 3, 4])
  expect(curried(1, 2)(3)(4)).toEqual([1, 2, 3, 4])
  expect(curried(1, 2)(3, 4)).toEqual([1, 2, 3, 4])
  expect(curried(1)(2, 3, 4)).toEqual([1, 2, 3, 4])
  expect(curried(1)(2)(3, 4)).toEqual([1, 2, 3, 4])
  expect(curried(1)(2, 3)(4)).toEqual([1, 2, 3, 4])
  expect(curried(1)(2)(3)(4)).toEqual([1, 2, 3, 4])
  expect(curried()()()()).toEqual([
    undefined,
    undefined,
    undefined,
    undefined,
  ])
})
