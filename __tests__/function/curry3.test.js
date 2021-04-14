import { curry3 } from '../../src/curry3.js'

it('creates a curried function with arity of 3', () => {
  const fn = (a, b, c) => [a, b, c]
  const curried = curry3(fn)

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
