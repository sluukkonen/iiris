import { toLowerCase } from './toLowerCase.js'

it('converts a string to lowercase', () => {
  expect(toLowerCase('ABC')).toBe('abc')
})
