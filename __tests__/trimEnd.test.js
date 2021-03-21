import { trimEnd } from '../src/trimEnd'

it('trims whitespace from both ends of a string', () => {
  expect(trimEnd('  abc  ')).toBe('  abc')
})
