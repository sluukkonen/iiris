import { clamp } from '../../src/clamp.js'

it('clamps an ordered value to a range', () => {
  expect(clamp([0, 1], 2)).toBe(1)
  expect(clamp([0, 1], -1)).toBe(0)
  expect(clamp([0, 1], 1)).toBe(1)
  expect(clamp([0, 1], 0)).toBe(0)
  expect(clamp([0, 1], 0.5)).toBe(0.5)
})
