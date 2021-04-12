import { from } from '../../src/set/from.js'
import { has } from '../../src/set/has.js'

it('checks if a value is a member of set', () => {
  const set = from([1, 2, 3])
  expect(has(1, set)).toBe(true)
  expect(has(0, set)).toBe(false)
})
