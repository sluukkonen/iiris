import { trimStart } from '../src/trimStart'

it('trims whitespace from both ends of a string', () => {
  expect(trimStart('  abc  ')).toBe('abc  ')
})
