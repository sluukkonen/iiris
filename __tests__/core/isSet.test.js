import { isSet } from '../../src/core/isSet.js'

it('returns whether the value is a Set', () => {
  expect(isSet(new Set())).toBe(true)
  expect(isSet({})).toBe(false)
  expect(isSet(null)).toBe(false)
})
