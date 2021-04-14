import { lte } from '../../src/lte.js'

it('returns whether the second value is less than or equal to the first', () => {
  expect(lte(1, 0)).toBe(true)
  expect(lte(0, 1)).toBe(false)
  expect(lte(0, 0)).toBe(true)
})
