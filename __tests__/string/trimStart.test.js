import { trimStart } from '../../src/string/trimStart.js'

it('trims whitespace from both ends of a string', () => {
  expect(trimStart('  abc  ')).toBe('abc  ')
})
