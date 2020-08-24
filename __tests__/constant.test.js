import { constant } from '../src/constant'

it('returns a function that always returns the first argument', () => {
  expect(constant(1).name).toBe('constant1')
  expect(constant(1)(2)).toBe(1)
  expect(constant(2)(1)).toBe(2)
})
