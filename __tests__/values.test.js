import { values } from '../src'

it('returns the own enumerable values of an object', () => {
  const obj = Object.assign(Object.create({ a: 1 }), { b: 2, c: 3 })
  expect(values(obj)).toEqual([2, 3])
})

it('returns an empty array for null and undefined', () => {
  expect(values(null)).toEqual([])
  expect(values(undefined)).toEqual([])
})
