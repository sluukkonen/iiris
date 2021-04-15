import { getOr } from '../../src/map/getOr.js'

it('retrieves a value or the default value from the map', () => {
  expect(getOr(999, 'a', new Map([['a', 1]]))).toBe(1)
  expect(getOr(999, 'a', new Map())).toBe(999)
})
