import { nthEquals } from '../src/nthEquals'

it('checks if an element of array deeply equals value', () => {
  const arr = [{ a: 1 }]

  expect(nthEquals({ a: 1 }, 0, arr)).toBe(true)
  expect(nthEquals({ a: 2 }, 0, arr)).toBe(false)
  expect(nthEquals({ a: 1 }, 1, arr)).toBe(false)
})
