import { keys } from '../../src/object/keys.js'

it('returns the own enumerable keys of an object', () => {
  const obj = Object.assign(Object.create({ a: 1 }), { b: 2, c: 3 })
  expect(keys(obj)).toEqual(['b', 'c'])
})

it('returns an empty array for null and undefined', () => {
  expect(() => keys(null)).toThrowError(
    new TypeError('Cannot convert undefined or null to object')
  )
  expect(() => keys(undefined)).toThrowError(
    new TypeError('Cannot convert undefined or null to object')
  )
})
