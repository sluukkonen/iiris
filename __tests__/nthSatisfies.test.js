import { nthSatisfies } from '../src/nthSatisfies'
import { equals } from '../src/equals'

it('checks if an element of an array satisfies a predicate', () => {
  const arr = [1]

  expect(nthSatisfies(equals(1), 0, arr)).toBe(true)
  expect(nthSatisfies(equals(2), 0, arr)).toBe(false)
  expect(nthSatisfies(equals(1), 1, arr)).toBe(false)
})
