import { valueOr } from '../../src/core/valueOr.js'

it('returns the second argument if it is not undefined, default value otherwise', () => {
  expect(valueOr(999, 0)).toBe(0)
  expect(valueOr(999, undefined)).toBe(999)
})
