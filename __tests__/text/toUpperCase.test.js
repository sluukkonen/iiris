import { toUpperCase } from '../../src/text/toUpperCase.js'

it('converts a string to lowercase', () => {
  expect(toUpperCase('abc')).toBe('ABC')
})
