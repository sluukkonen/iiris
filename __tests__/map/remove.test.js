import { remove } from '../../src/map/remove.js'
import { fromObject } from '../../src/map/fromObject.js'

it('removes an entry from a map', () => {
  expect(remove('a', fromObject({ a: 1, b: 2, c: 3 }))).toEqual(
    fromObject({ b: 2, c: 3 })
  )
})

it('returns the map unchanged if it does not contain the key', () => {
  const map = fromObject({ a: 1, b: 2, c: 3 })
  expect(remove('d', map)).toBe(map)
})
