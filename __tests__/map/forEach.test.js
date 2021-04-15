import { forEach } from '../../src/map/forEach.js'

it('executes a function for each key-value pair of the map', () => {
  const fn = jest.fn()
  const entries = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]
  const map = new Map(entries)
  expect(forEach(fn, map)).toBe(map)
  expect(fn.mock.calls).toEqual(entries)
})
