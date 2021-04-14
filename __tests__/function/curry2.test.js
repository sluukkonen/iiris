import { curry2 } from '../../src/curry2.js'

it('creates a curried function with arity of 2', () => {
  const fn = (a, b) => [a, b]
  const curried = curry2(fn)

  expect(curried).toHaveLength(2)
  expect(curried.name).toBe('curry2')
  expect(curried(1).name).toBe('curry21')

  expect(curried(1, 2)).toEqual([1, 2])
  expect(curried(1)(2)).toEqual([1, 2])
  expect(curried()()).toEqual([undefined, undefined])
})
