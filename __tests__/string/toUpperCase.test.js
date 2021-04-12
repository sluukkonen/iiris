import { toUpperCase } from '../../src/string/toUpperCase.js'

it('converts a string to lowercase', () => {
  expect(toUpperCase('abc')).toBe('ABC')
})
