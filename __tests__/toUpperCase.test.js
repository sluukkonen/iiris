import { toUpperCase } from '../src/toUpperCase'

it('converts a string to lowercase', () => {
  expect(toUpperCase('abc')).toBe('ABC')
})
