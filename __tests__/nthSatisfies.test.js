import { nthSatisfies } from '../src/nthSatisfies'
import { equals } from '../src/equals'

it('checks if an element of an array satisfies a predicate', () => {
  const arr = [1]

  expect(nthSatisfies(0, equals(1), arr)).toBe(true)
  expect(nthSatisfies(0, equals(2), arr)).toBe(false)
  expect(nthSatisfies(1, equals(1), arr)).toBe(false)
})
