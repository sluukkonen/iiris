import { equals } from '../core/equals.js'
import { nthSatisfies } from './nthSatisfies.js'

it('checks if an element of an array satisfies a predicate', () => {
  const arr = [1]

  expect(nthSatisfies(0, equals(1), arr)).toBe(true)
  expect(nthSatisfies(0, equals(2), arr)).toBe(false)
  expect(nthSatisfies(1, equals(1), arr)).toBe(false)
})
