import { has } from '../../src/map/has.js'

it('checks if the map contains a value', () => {
  expect(has('a', new Map([['a', 1]]))).toBe(true)
  expect(has('a', new Map())).toBe(false)
})
