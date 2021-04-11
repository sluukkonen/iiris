import { isError } from './isError.js'

it('returns whether the value is an Error', () => {
  expect(isError(new Error('Hi!'))).toBe(true)
  expect(isError({})).toBe(false)
  expect(isError(null)).toBe(false)
})
