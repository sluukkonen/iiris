import { atEquals } from '../src/atEquals'

it('checks if an element of array deeply equals value', () => {
  const arr = [{ a: 1 }]

  expect(atEquals({ a: 1 }, 0, arr)).toBe(true)
  expect(atEquals({ a: 2 }, 0, arr)).toBe(false)
  expect(atEquals({ a: 1 }, 1, arr)).toBe(false)
})
