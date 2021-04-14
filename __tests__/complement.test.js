import { complement } from '../src/complement.js'
import { identity } from '../src/identity.js'

it('returns the complement of a predicate function', () => {
  expect(complement(identity)(true)).toBe(false)
  expect(complement(identity)(false)).toBe(true)
})
