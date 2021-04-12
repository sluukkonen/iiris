import { values } from '../../src/object/values.js'

it('returns the own enumerable values of an object', () => {
  const obj = Object.assign(Object.create({ a: 1 }), { b: 2, c: 3 })
  expect(values(obj)).toEqual([2, 3])
})

it('throws an error for null and undefined', () => {
  expect(() => values(null)).toThrowError(
    new TypeError('Cannot convert undefined or null to object')
  )
  expect(() => values(undefined)).toThrowError(
    new TypeError('Cannot convert undefined or null to object')
  )
})
