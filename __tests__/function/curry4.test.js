import { curry4 } from '../../src/curry4.js'

it('creates a curried function with arity of 4', () => {
  const fn = (a, b, c, d) => [a, b, c, d]
  const curried = curry4(fn)

  // Functions on the generic path do not have their length set. At least not yet.
  expect(curried).toHaveLength(4)
  expect(curried.name).toBe('curry4')
  expect(curried(1).name).toBe('curry41')
  expect(curried(1)(2).name).toBe('curry42')
  expect(curried(1)(2)(3).name).toBe('curry43')

  expect(curried(1, 2, 3, 4)).toEqual([1, 2, 3, 4])
  expect(curried(1, 2, 3)(4)).toEqual([1, 2, 3, 4])
  expect(curried(1, 2)(3)(4)).toEqual([1, 2, 3, 4])
  expect(curried(1, 2)(3, 4)).toEqual([1, 2, 3, 4])
  expect(curried(1)(2, 3, 4)).toEqual([1, 2, 3, 4])
  expect(curried(1)(2)(3, 4)).toEqual([1, 2, 3, 4])
  expect(curried(1)(2, 3)(4)).toEqual([1, 2, 3, 4])
  expect(curried(1)(2)(3)(4)).toEqual([1, 2, 3, 4])
  expect(curried()()()()).toEqual([undefined, undefined, undefined, undefined])
})
