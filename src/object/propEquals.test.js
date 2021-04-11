import { propEquals } from './propEquals.js'

it('checks if a property deeply equals value', () => {
  const obj = { a: [1] }

  expect(propEquals('a', [1], obj)).toBe(true)
  expect(propEquals('a', [2], obj)).toBe(false)
  expect(propEquals('b', undefined, obj)).toBe(false)
})
