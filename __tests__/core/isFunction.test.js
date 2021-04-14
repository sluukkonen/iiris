import { isFunction } from '../../src/isFunction.js'

it('returns whether the value is a function', () => {
  expect(isFunction(isFunction)).toBe(true)
  expect(isFunction({})).toBe(false)
  expect(isFunction(null)).toBe(false)
})
