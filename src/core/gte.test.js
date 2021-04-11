import { gte } from './gte.js'

it('returns whether the second value is greater than or equal to the first', () => {
  expect(gte(1, 0)).toBe(false)
  expect(gte(0, 1)).toBe(true)
  expect(gte(0, 0)).toBe(true)
})
