import { test as testFn } from '../../src/string/test.js'

it('checks if a string matches a regex', () => {
  expect(testFn(/abc/, 'abc')).toBe(true)
  expect(testFn(/abc/, 'abd')).toBe(false)
})
