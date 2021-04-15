import { inc } from '../../src/inc.js'
import { modify } from '../../src/map/modify.js'
import { fromObject } from '../../src/map/fromObject.js'

it('modifies the current value of a map', () => {
  expect(modify('a', inc, fromObject({ a: 1, b: 2, c: 3 }))).toEqual(
    fromObject({ a: 2, b: 2, c: 3 })
  )
})

it('returns the map if it does not contain key', () => {
  const map = fromObject({ a: 1, b: 2, c: 3 })
  expect(modify('d', inc, map)).toBe(map)
})
