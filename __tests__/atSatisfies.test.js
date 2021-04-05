import { atSatisfies } from '../src/atSatisfies'
import { equals } from '../src/equals'

it('checks if an element of an array satisfies a predicate', () => {
  const arr = [1]

  expect(atSatisfies(equals(1), 0, arr)).toBe(true)
  expect(atSatisfies(equals(2), 0, arr)).toBe(false)
  expect(atSatisfies(equals(1), 1, arr)).toBe(false)
})
