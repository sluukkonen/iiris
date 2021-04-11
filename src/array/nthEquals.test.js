import { nthEquals } from './nthEquals.js'

it('checks if an element of array deeply equals value', () => {
  const arr = [{ a: 1 }]

  expect(nthEquals(0, { a: 1 }, arr)).toBe(true)
  expect(nthEquals(0, { a: 2 }, arr)).toBe(false)
  expect(nthEquals(1, { a: 1 }, arr)).toBe(false)
})
