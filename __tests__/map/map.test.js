import { map } from '../../src/map/map.js'

it('maps the values of a map', () => {
  const m = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ])
  expect(map((n) => n + 1, m)).toEqual(
    new Map([
      ['a', 2],
      ['b', 3],
      ['c', 4],
    ])
  )
})
