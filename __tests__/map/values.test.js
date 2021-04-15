import { values } from '../../src/map/values.js'

it('returns an iterator containing the values of the map', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ])
  expect(Array.from(values(map))).toEqual([1, 2, 3])
})
