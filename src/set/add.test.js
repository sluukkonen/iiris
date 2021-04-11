import { add } from './add.js'
import { from } from './from.js'

it('adds a new member to a set', () => {
  const set = from([1, 2, 3])
  expect(add(4, set)).toEqual(from([1, 2, 3, 4]))
})

it('returns the original set if it already has the value', () => {
  const set = from([1, 2, 3])
  const result = add(1, set)
  expect(result).toBe(set)
  expect(result).toEqual(from([1, 2, 3]))
})
