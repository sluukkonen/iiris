import { mapKeys } from '../../src/map/mapKeys.js'

it('maps the keys of a map', () => {
  const m = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ])
  expect(mapKeys((k) => k.toUpperCase(), m)).toEqual(
    new Map([
      ['A', 1],
      ['B', 2],
      ['C', 3],
    ])
  )
})
