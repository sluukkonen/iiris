import { getOr } from '../../src/object/getOr.js'

it('retrieves a property or a default value from an object', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(getOr(0, 'a', obj)).toBe(1)
  expect(getOr(0, 'b', obj)).toBe(2)
  expect(getOr(0, 'c', obj)).toBe(3)
  expect(getOr(0, 'd', obj)).toBe(0)

  expect(getOr(0, 'a')(obj)).toBe(1)
  expect(getOr(0, 'b')(obj)).toBe(2)
  expect(getOr(0, 'c')(obj)).toBe(3)
  expect(getOr(0, 'd')(obj)).toBe(0)
})

it('returns the default value if the value is undefined', () => {
  expect(getOr(0, 'a', { a: undefined })).toBe(0)
})

it('throws an error if object is nil', () => {
  expect(() => getOr(0, 'a', null)).toThrowError(
    new TypeError(`Cannot read properties of null (reading 'a')`)
  )
})
