import { remove } from './remove.js'
import { from } from './from.js'

it('removes a value from a set', () => {
  const set = from([1, 2, 3])

  expect(remove(1, set)).toEqual(from([2, 3]))
})

it('returns the original set if it does not have the value', () => {
  const set = from([1, 2, 3])
  const result = remove(0, set)

  expect(result).toBe(set)
  expect(result).toEqual(from([1, 2, 3]))
})
