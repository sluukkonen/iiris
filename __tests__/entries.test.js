import { entries } from '../src/entries'

it('returns the own enumerable keys and values of an object', () => {
  const obj = Object.assign(Object.create({ a: 1 }), { b: 2, c: 3 })
  expect(entries(obj)).toEqual([
    ['b', 2],
    ['c', 3],
  ])
})

it('returns an empty array for null and undefined', () => {
  expect(entries(null)).toEqual([])
  expect(entries(undefined)).toEqual([])
})
