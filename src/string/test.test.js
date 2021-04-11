import { test as testFn } from './test.js'

it('checks if a string matches a regex', () => {
  expect(testFn(/abc/, 'abc')).toBe(true)
  expect(testFn(/abc/, 'abd')).toBe(false)
})
