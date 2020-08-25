import { complement } from '../src/complement'
import { identity } from '../src/identity'

it('returns the complement of a predicate function', () => {
  expect(complement(identity)(true)).toBe(false)
  expect(complement(identity)(false)).toBe(true)
})
