import { isDate } from '../../src/core/isDate.js'

it('returns whether the value is a Date', () => {
  expect(isDate(new Date())).toBe(true)
  expect(isDate({})).toBe(false)
  expect(isDate(null)).toBe(false)
})
