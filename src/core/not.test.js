import { not } from './not.js'

it('flips a boolean value', () => {
  expect(not(true)).toBe(false)
  expect(not(false)).toBe(true)
})
