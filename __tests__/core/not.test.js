import { not } from '../../src/not.js'

it('flips a boolean value', () => {
  expect(not(true)).toBe(false)
  expect(not(false)).toBe(true)
})
