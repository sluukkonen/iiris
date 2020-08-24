import { gt } from '../src/gt'

it('returns whether the second value is greater than the first', () => {
  expect(gt(1, 0)).toBe(false)
  expect(gt(0, 1)).toBe(true)
  expect(gt(0, 0)).toBe(false)
})
