import { complement } from './complement.js'
import { identity } from './identity.js'

it('returns the complement of a predicate function', () => {
  expect(complement(identity)(true)).toBe(false)
  expect(complement(identity)(false)).toBe(true)
})
