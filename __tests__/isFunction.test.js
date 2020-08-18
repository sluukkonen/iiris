import { isFunction } from '../src/isFunction'

it('returns whether the value is a function', () => {
  expect(isFunction(isFunction)).toBe(true)
  expect(isFunction({})).toBe(false)
  expect(isFunction(null)).toBe(false)
})
