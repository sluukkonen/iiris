import { entries } from '../../src/map/entries.js'

it('returns an iterator containing the entries of the map', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ])
  expect(Array.from(entries(map))).toEqual([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ])
})
