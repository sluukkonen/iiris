import { trim } from '../../src/text/trim.js'

it('trims whitespace from both ends of a string', () => {
  expect(trim('  abc  ')).toBe('abc')
})
