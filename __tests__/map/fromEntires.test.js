import { fromEntries } from '../../src/map/fromEntries.js'

it('creates a map from an iterable of entries', () => {
  const entries = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]
  expect(fromEntries(entries)).toEqual(new Map(entries))
})
