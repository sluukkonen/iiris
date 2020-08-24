import { isRegExp } from '../src/isRegExp'

it('returns whether the value is a RegExp', () => {
  expect(isRegExp(/\s/)).toBe(true)
  expect(isRegExp({})).toBe(false)
  expect(isRegExp(null)).toBe(false)
})
