import { trim } from '../src/trim'

it('trims whitespace from both ends of a string', () => {
  expect(trim('  abc  ')).toBe('abc')
})
