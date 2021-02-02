import { propOr } from '../src/propOr'

it('retrieves a property or a default value from an object', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(propOr(0, 'a', obj)).toBe(1)
  expect(propOr(0, 'b', obj)).toBe(2)
  expect(propOr(0, 'c', obj)).toBe(3)
  expect(propOr(0, 'd', obj)).toBe(0)

  expect(propOr(0, 'a')(obj)).toBe(1)
  expect(propOr(0, 'b')(obj)).toBe(2)
  expect(propOr(0, 'c')(obj)).toBe(3)
  expect(propOr(0, 'd')(obj)).toBe(0)
})

it('returns the default value if the value is undefined', () => {
  expect(propOr(0, 'a', { a: undefined })).toBe(0)
})

it('returns the default value if the target is not an object', () => {
  expect(propOr(0, 'a', null)).toBe(0)
  expect(propOr(0, 'a', undefined)).toBe(0)
  expect(propOr(0, 'length', '')).toBe(0)

  expect(propOr(0, 'a')(null)).toBe(0)
  expect(propOr(0, 'a')(undefined)).toBe(0)
  expect(propOr(0, 'length')('')).toBe(0)
})
