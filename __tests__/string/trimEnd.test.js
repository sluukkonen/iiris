import { trimEnd } from '../../src/string/trimEnd.js'

it('trims whitespace from both ends of a string', () => {
  expect(trimEnd('  abc  ')).toBe('  abc')
})
