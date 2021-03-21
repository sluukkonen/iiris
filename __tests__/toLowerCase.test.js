import { toLowerCase } from '../src/toLowerCase'

it('converts a string to lowercase', () => {
  expect(toLowerCase('ABC')).toBe('abc')
})
