import { subtractBy } from '../src/subtractBy.js'

it('subtractBy()', () => {
  expect(subtractBy(1, 0)).toBe(-1)
  expect(subtractBy(0, 1)).toBe(1)
})
