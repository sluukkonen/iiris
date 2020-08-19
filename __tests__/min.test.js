import { min } from '../src'

it('returns the smaller of two ordered values', () => {
  expect(min(0, 1)).toBe(0)
  expect(min(1, 0)).toBe(0)

  expect(min('a', 'b')).toBe('a')
  expect(min('b', 'a')).toBe('a')

  expect(min(true, false)).toBe(false)
  expect(min(false, true)).toBe(false)
})
