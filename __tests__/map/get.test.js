import { get } from '../../src/map/get.js'

it('retrieves a value from the map', () => {
  expect(get('a', new Map([['a', 1]]))).toBe(1)
  expect(get('a', new Map())).toBe(undefined)
})
