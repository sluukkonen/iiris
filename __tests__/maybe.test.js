import { maybe } from '../src/maybe'

const inc = (x) => x + 1

it('applies a function to a value if the value is not undefined', () => {
  expect(maybe(999, inc, 0)).toBe(1)
  expect(maybe(999, inc, null)).toBe(1)
  expect(maybe(999, inc, '')).toBe('1')
})

it('returns the default value if the value is undefined', () => {
  expect(maybe(999, inc, undefined)).toBe(999)
})
