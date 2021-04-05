import { propEquals } from '../src/propEquals'

it('checks if a property deeply equals value', () => {
  const obj = { a: [1] }

  expect(propEquals([1], 'a', obj)).toBe(true)
  expect(propEquals([2], 'a', obj)).toBe(false)
  expect(propEquals(undefined, 'b', obj)).toBe(false)
})
