import { keys } from '../../src/map/keys.js'

it('returns an iterator containing the keys of the map', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ])
  expect(Array.from(keys(map))).toEqual(['a', 'b', 'c'])
})
