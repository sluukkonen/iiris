import { test as testFn } from '../src/test'

it('checks if a string matches a regex', () => {
  expect(testFn(/abc/, 'abc')).toBe(true)
  expect(testFn(/abc/, 'abd')).toBe(false)
})
