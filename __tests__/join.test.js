import { join } from '../src'

it('converts an array to string, separating each element with the separator', () => {
  expect(join(', ', [])).toBe('')
  expect(join(', ', ['a'])).toBe('a')
  expect(join(', ', ['a', 'b'])).toBe('a, b')
  expect(join(', ', ['a', 'b', 'c'])).toBe('a, b, c')
})
