import { toLowerCase } from '../../src/text/toLowerCase.js'

it('converts a string to lowercase', () => {
  expect(toLowerCase('ABC')).toBe('abc')
})
