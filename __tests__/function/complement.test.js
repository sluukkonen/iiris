import { complement } from '../../src/function/complement.js'
import { identity } from '../../src/function/identity.js'

it('returns the complement of a predicate function', () => {
  expect(complement(identity)(true)).toBe(false)
  expect(complement(identity)(false)).toBe(true)
})
