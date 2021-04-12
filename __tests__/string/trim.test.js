import { trim } from '../../src/string/trim.js'

it('trims whitespace from both ends of a string', () => {
  expect(trim('  abc  ')).toBe('abc')
})
