const { isRegExp } = require('../src')

it('returns whether the value is a RegExp', () => {
  expect(isRegExp(/\s/)).toBe(true)
  expect(isRegExp({})).toBe(false)
  expect(isRegExp(null)).toBe(false)
})
