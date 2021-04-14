import { max } from '../../src/max.js'

it('returns the larger of two ordered values', () => {
  expect(max(0, 1)).toBe(1)
  expect(max(1, 0)).toBe(1)

  expect(max('a', 'b')).toBe('b')
  expect(max('b', 'a')).toBe('b')

  expect(max(true, false)).toBe(true)
  expect(max(false, true)).toBe(true)
})
