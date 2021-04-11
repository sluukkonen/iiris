import { trimStart } from './trimStart.js'

it('trims whitespace from both ends of a string', () => {
  expect(trimStart('  abc  ')).toBe('abc  ')
})
